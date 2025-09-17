import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GetConnectedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetConnectedModal: React.FC<GetConnectedModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    resume: '',
    phone: '',
    location: '',
    experience: '',
    company: '',
    skills: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.resume) newErrors.resume = "Resume is required";
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10 digit phone number";
    }

    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.experience) newErrors.experience = "Experience is required";
    if (!formData.company) newErrors.company = "Company is required";
    if (!formData.skills) newErrors.skills = "Skills cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('Profile updated successfully!');
      onClose();
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#f9fbfd] rounded-2xl shadow-2xl ring-1 ring-gray-200 w-full max-w-lg sm:max-w-xl md:max-w-2xl p-6 sm:p-8 relative transition-all duration-300 overflow-y-auto max-h-[90vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Let’s Connect With Us...</h2>
          <p className="text-gray-500 text-sm">
            Because employers love and prefer good completed profiles
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Resume + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm 
               focus:outline-none focus:ring-2 focus:ring-[#17385b] focus:border-transparent"
              />
              {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume}</p>}
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10 digit mobile number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm 
               focus:outline-none focus:ring-2 focus:ring-[#17385b] focus:border-transparent"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Location + Experience */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm 
               focus:outline-none focus:ring-2 focus:ring-[#17385b] focus:border-transparent"
              >
                <option value="">Select city</option>
                <option value="pune">Pune</option>
                <option value="bangalore">Bangalore</option>
                <option value="delhi">Delhi</option>
              </select>
              {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
            </div>
            <div>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Years of experience"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm 
               focus:outline-none focus:ring-2 focus:ring-[#17385b] focus:border-transparent"
              />
              {errors.experience && <p className="text-red-500 text-xs mt-1">{errors.experience}</p>}
            </div>
          </div>

          {/* Company + Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Current company"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm 
               focus:outline-none focus:ring-2 focus:ring-[#17385b] focus:border-transparent"
              />
              {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
            </div>
            <div>
              <input
                type="text"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="Add skills"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm 
               focus:outline-none focus:ring-2 focus:ring-[#17385b] focus:border-transparent"
              />
              {errors.skills && <p className="text-red-500 text-xs mt-1">{errors.skills}</p>}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-16 sm:px-20 py-3 bg-[#17385b] text-white hover:bg-[#112a45] rounded-[30px] text-sm sm:text-base"
            >
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetConnectedModal;
