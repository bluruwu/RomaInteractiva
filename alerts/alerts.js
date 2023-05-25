import 'tailwindcss/tailwind.css';

export function Alert({ type, message }) {
    const alertClasses = {
        success: 'bg-green-100 text-green-800',
        error: 'bg-red-100 text-red-800',
        info: 'bg-blue-100 text-blue-800',
    };

    const alertClass = alertClasses[type] || '';

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="modal">
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="mt-3 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg
                className="h-6 w-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-lg leading-6 font-medium text-green-900">Login Successful</h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-sm text-gray-500">{message}</p>
            </div>
            <div className="items-center px-4 py-3">
              <button
                id="ok-btn"
                className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}