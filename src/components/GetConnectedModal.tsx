const API_URL = "http://192.168.0.118:3025";
import React, { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface GetConnectedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetConnectedModal: React.FC<GetConnectedModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      console.log("process.env.NEXT_PUBLIC_SERVER_URL :", `${API_URL}`);

      const res = await axios.post(
        `${API_URL}/rsis/add-contact`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.data.status === "SUCCESS") {
        toast.success("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
        onClose();
      } else {
        toast.warn(res.data.message || "Failed to send message ❌");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error while sending message ❌");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

      <div className="bg-[#fff] rounded-2xl shadow-2xl ring-1 ring-gray-200 w-full max-w-lg p-6 sm:p-8 relative transition-all duration-300 overflow-y-auto max-h-[90vh]">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Let’s Connect With Us...
          </h2>
          <p className="text-gray-500 text-sm">
            We’d love to hear from you — send us a message
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 getconnect-form">
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#17385b]"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#17385b]"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm
             focus:outline-none focus:ring-2 focus:ring-[#17385b]
             resize-none overflow-hidden"
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={loading}
              className="px-10 py-3 bg-[#17385b] text-white hover:bg-[#112a45] rounded-[30px] text-sm sm:text-base disabled:opacity-50"
            >
              {loading ? "Sending..." : "SEND"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetConnectedModal;
