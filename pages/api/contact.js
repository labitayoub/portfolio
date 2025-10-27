export default async function handler(req, res) {
  console.log('Received request:', req.body);

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validation des données
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  try {
    // Pour l'instant, on retourne juste un succès
    // Vous pouvez ajouter la logique d'envoi d'email plus tard
    console.log('Message reçu:', { name, email, subject, message });

    return res.status(200).json({ 
      message: "Message envoyé avec succès!",
      success: true 
    });
  } catch (error) {
    console.log('Error processing message:', error);
    return res.status(500).json({ 
      message: "Erreur lors de l'envoi du message",
      success: false 
    });
  }
}
