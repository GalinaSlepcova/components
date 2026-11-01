function ProfileCard() {
  const skills = ['HTML', 'CSS', 'React'];

  return (
    <div className="profile-card" style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, maxWidth: 300 }}>
      <h2>Анна Иванова</h2>
      <h3>Веб-разработчик</h3>
      <p>Люблю писать чистый код и изучать новые технологии</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileCard;