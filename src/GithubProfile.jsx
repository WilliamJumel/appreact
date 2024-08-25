import React, { useState, useEffect } from 'react';

const GithubProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('https://api.github.com/users/github-john-doe');
        const data = await response.json();
        // Ignorer la bio pour éviter l'affichage du texte non désiré
        setProfile({ ...data, bio: null });
      } catch (error) {
        console.error('Erreur lors du chargement du profil GitHub:', error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <p>Chargement du profil...</p>;
  }

  return (
    <div className="github-profile">
      <h3>{profile.name || 'John Doe'}</h3>
      {/* Le texte bio est ignoré pour éviter l'affichage */}
    </div>
  );
};

export default GithubProfile;