import React, { useState } from 'react';
import { mockUsers, faculties } from '../mock/users';

const RegistrationForm = ({ onRegister, onLoginClick }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    studentId: "",
    faculty: ""
  });

  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateUniversityEmail = (email) => {
    return email.endsWith(".edu") || email.includes("universidad");
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validación en tiempo real
    if (name === "email") {
      setErrors(prev => ({
        ...prev,
        email: !validateEmail(value) ? "Email inválido" :
               !validateUniversityEmail(value) ? "Debe ser correo universitario" : null
      }));
    }
    
    if (name === "password") {
      setErrors(prev => ({
        ...prev,
        password: !validatePassword(value) ? "Mínimo 8 caracteres" : null
      }));
    }

    if (name === "confirmPassword") {
      setErrors(prev => ({
        ...prev,
        confirmPassword: value !== formData.password ? "Las contraseñas no coinciden" : null
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.name) newErrors.name = "Nombre requerido";
      if (!formData.studentId) newErrors.studentId = "Matrícula requerida";
      if (!formData.faculty) newErrors.faculty = "Facultad requerida";
    }
    
    if (step === 2) {
      if (!formData.email) newErrors.email = "Email requerido";
      else if (!validateEmail(formData.email)) newErrors.email = "Email inválido";
      else if (!validateUniversityEmail(formData.email)) newErrors.email = "Debe ser correo universitario";
      
      if (!formData.password) newErrors.password = "Contraseña requerida";
      else if (!validatePassword(formData.password)) newErrors.password = "Mínimo 8 caracteres";
      
      if (!formData.confirmPassword) newErrors.confirmPassword = "Confirma tu contraseña";
      else if (formData.confirmPassword !== formData.password) newErrors.confirmPassword = "Las contraseñas no coinciden";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      setIsSubmitting(true);
      
      // Simular registro
      setTimeout(() => {
        const newUser = {
          id: mockUsers.length + 1,
          ...formData,
          points: 0,
          joinedAt: new Date()
        };
        
        // En una app real, aquí iría la llamada a la API
        mockUsers.push(newUser);
        onRegister(newUser);
        setIsSubmitting(false);
      }, 1500);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md w-full">
      <div className="flex justify-center mb-6">
        <div className="flex space-x-2">
          {[1, 2].map((step) => (
            <div
              key={step}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= step
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {step}
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center">
        {currentStep === 1 ? "Información personal" : "Crear tu cuenta"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {currentStep === 1 && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Matrícula
              </label>
              <input
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.studentId ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
              />
              {errors.studentId && (
                <p className="mt-1 text-sm text-red-600">{errors.studentId}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Facultad
              </label>
              <select
                name="faculty"
                value={formData.faculty}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.faculty ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
              >
                <option value="">Selecciona tu facultad</option>
                {faculties.map((faculty) => (
                  <option key={faculty} value={faculty}>
                    {faculty}
                  </option>
                ))}
              </select>
              {errors.faculty && (
                <p className="mt-1 text-sm text-red-600">{errors.faculty}</p>
              )}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={nextStep}
                className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition"
              >
                Siguiente
              </button>
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Correo universitario
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirmar contraseña
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent`}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <div className="flex space-x-3 pt-2">
              <button
                type="button"
                onClick={prevStep}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-bold hover:bg-gray-300 transition"
              >
                Atrás
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition disabled:opacity-70"
              >
                {isSubmitting ? "Registrando..." : "Crear cuenta"}
              </button>
            </div>
          </>
        )}
      </form>

      <div className="mt-6 text-center">
        <button
          onClick={onLoginClick}
          className="text-green-600 font-medium hover:underline"
        >
          ¿Ya tienes cuenta? Inicia sesión
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;