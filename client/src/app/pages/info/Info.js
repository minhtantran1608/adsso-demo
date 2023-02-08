import "./styles.css";

function Info({ user }) {
  return (
    <div>
      <h1>Welcome Back {user.displayName}</h1>
      <div class="info-container">
        <h2>User Information</h2>
        <div class="info-block">
          <p class="label">First Name:</p>
          <p class="value">{user.givenName}</p>
        </div>
        <div class="info-block">
          <p class="label">Last Name:</p>
          <p class="value">{user.surname}</p>
        </div>
        <div class="info-block">
          <p class="label">Email:</p>
          <p class="value">{user.mail}</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
