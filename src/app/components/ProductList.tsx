import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct, deleteProduct } from "../features/inventorySlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define the Product type
interface Product {
  id: string;
  name: string;
  category: string;
  quantity: number;
}

// Define the props for the ProductList component
interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const dispatch = useDispatch();

  // Local state to handle editing a product
  const [editProductId, setEditProductId] = useState<string | null>(null);
  const [editedProduct, setEditedProduct] = useState<{
    name: string;
    category: string;
    quantity: number;
  } | null>(null);

  // Function to handle the start of editing a product
  const handleEditClick = (product: Product) => {
    setEditProductId(product.id);
    setEditedProduct({
      name: product.name,
      category: product.category,
      quantity: product.quantity,
    });
  };

  // Function to handle the change of input fields while editing
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "name" | "category" | "quantity"
  ) => {
    setEditedProduct((prev) => ({
      ...prev!,
      [field]: field === "quantity" ? +e.target.value : e.target.value,
    }));
  };

  // Function to save the edited product
  const handleSaveClick = () => {
    if (editProductId && editedProduct) {
      dispatch(
        updateProduct({
          id: editProductId,
          name: editedProduct.name,
          category: editedProduct.category,
          quantity: editedProduct.quantity,
        })
      );
      setEditProductId(null);
      setEditedProduct(null);
      toast.success("Product updated successfully!");
    }
  };

  // Function to cancel editing
  const handleCancelClick = () => {
    setEditProductId(null);
    setEditedProduct(null);
  };

  // Function to delete a product
  const handleDeleteClick = (id: string) => {
    const toastId = toast.info(
      <div>
        <p>Are you sure you want to delete this product?</p>
        <div className="flex space-x-2 mt-2">
          <button
            onClick={() => {
              dispatch(deleteProduct(id));
              toast.dismiss(toastId);
              toast.success("Product deleted successfully!");
            }}
            className="text-red-500 hover:underline"
          >
            Confirm
          </button>
          <button
            onClick={() => toast.dismiss(toastId)}
            className="text-gray-500 hover:underline"
          >
            Cancel
          </button>
        </div>
      </div>,
      {
        autoClose: false,
        closeButton: false,
      }
    );
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Product List</h2>
      {products.length === 0 ? (
        <p className="text-gray-600">No products available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="py-2 px-4 text-left text-gray-600">Name</th>
                <th className="py-2 px-4 text-left text-gray-600">Category</th>
                <th className="py-2 px-4 text-left text-gray-600">Quantity</th>
                <th className="py-2 px-4 text-left text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-gray-50">
                  <td className="py-2 px-4 text-gray-900">
                    {editProductId === product.id ? (
                      <input
                        type="text"
                        value={editedProduct?.name || ""}
                        onChange={(e) => handleChange(e, "name")}
                        className="w-full px-2 py-1 border border-gray-300 rounded"
                      />
                    ) : (
                      product.name
                    )}
                  </td>
                  <td className="py-2 px-4 text-gray-600">
                    {editProductId === product.id ? (
                      <input
                        type="text"
                        value={editedProduct?.category || ""}
                        onChange={(e) => handleChange(e, "category")}
                        className="w-full px-2 py-1 border border-gray-300 rounded"
                      />
                    ) : (
                      product.category
                    )}
                  </td>
                  <td className="py-2 px-4 text-gray-600">
                    {editProductId === product.id ? (
                      <input
                        type="number"
                        value={editedProduct?.quantity || 0}
                        onChange={(e) => handleChange(e, "quantity")}
                        className="w-full px-2 py-1 border border-gray-300 rounded"
                      />
                    ) : (
                      product.quantity
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {editProductId === product.id ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={handleSaveClick}
                          className="text-green-500 hover:underline"
                          aria-label="Save changes"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelClick}
                          className="text-red-500 hover:underline"
                          aria-label="Cancel editing"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditClick(product)}
                          className="text-blue-500 hover:underline"
                          aria-label="Edit product"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteClick(product.id)}
                          className="text-red-500 hover:underline"
                          aria-label="Delete product"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
    </div>
  );
};

export default ProductList;