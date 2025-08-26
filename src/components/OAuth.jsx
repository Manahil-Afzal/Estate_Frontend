import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  const handleGoogleClick = async () => {
    try {
      // ✅ Sign in with popup
      const result = await signInWithPopup(auth, googleProvider);

      // ✅ Get user info
      const user = result.user;
      console.log("Google User:", user);

      // TODO: Send user data to backend (create user if new)
    } catch (error) {
      console.error("Google Sign In Error:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-red-500 text-white p-2 rounded-lg w-full flex items-center justify-center gap-2 mt-4"
    >
      <FcGoogle size={20} />
      Continue with Google
    </button>
  );
}
