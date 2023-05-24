import { useAuth } from "../../context/Users.context";

function HomePage() {
  const { user, signup, login, logout } = useAuth();

  // Example usage
  const handleSignup = () => {
    const userData = { username: "exampleUser", password: "examplePassword" };
    signup(userData);
  };

  const handleLogin = () => {
    const userData = { username: "exampleUser", password: "examplePassword" };
    login(userData);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={handleSignup}>Sign Up</button>
          <button onClick={handleLogin}>Log In</button>
        </div>
      )}
    </div>
  );
}

export default HomePage;
