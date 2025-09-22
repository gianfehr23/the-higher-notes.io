// ===== ALTERNATIVA SIMPLE: JSONBin API =====
// Esta es una alternativa más fácil que no requiere configuración de Firebase

const JSONBIN_API_KEY = '$2a$10$YOUR_API_KEY_HERE'; // Obtén gratis en jsonbin.io
const JSONBIN_BIN_ID = 'YOUR_BIN_ID_HERE'; // Se crea automáticamente

// Función para obtener leaderboard global usando JSONBin
async function loadGlobalLeaderboardSimple() {
    try {
        const response = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`, {
            headers: {
                'X-Master-Key': JSONBIN_API_KEY
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            const users = data.record.users || [];
            console.log('Global users loaded from JSONBin:', users);
            populateGlobalLeaderboard(users);
        } else {
            console.log('JSONBin not available, using local leaderboard');
            populateLeaderboard();
        }
    } catch (error) {
        console.error('Error loading from JSONBin:', error);
        populateLeaderboard();
    }
}

// Función para guardar usuario en JSONBin
async function saveUserToJSONBin(username, password, highScore = 0) {
    try {
        // Primero obtener datos existentes
        const response = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`, {
            headers: {
                'X-Master-Key': JSONBIN_API_KEY
            }
        });
        
        let users = [];
        if (response.ok) {
            const data = await response.json();
            users = data.record.users || [];
        }
        
        // Agregar nuevo usuario
        const existingUserIndex = users.findIndex(u => u.username === username);
        if (existingUserIndex === -1) {
            users.push({
                username: username,
                password: password,
                highScore: highScore,
                createdAt: new Date().toISOString()
            });
        }
        
        // Guardar datos actualizados
        const updateResponse = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': JSONBIN_API_KEY
            },
            body: JSON.stringify({ users: users })
        });
        
        if (updateResponse.ok) {
            console.log('User saved to JSONBin:', username);
        }
        
    } catch (error) {
        console.error('Error saving to JSONBin:', error);
    }
}

// Función para actualizar score en JSONBin
async function updateScoreInJSONBin(username, score) {
    try {
        // Obtener datos existentes
        const response = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`, {
            headers: {
                'X-Master-Key': JSONBIN_API_KEY
            }
        });
        
        if (!response.ok) return;
        
        const data = await response.json();
        const users = data.record.users || [];
        
        // Actualizar score del usuario
        const userIndex = users.findIndex(u => u.username === username);
        if (userIndex !== -1 && score > (users[userIndex].highScore || 0)) {
            users[userIndex].highScore = score;
            users[userIndex].lastUpdated = new Date().toISOString();
            
            // Guardar datos actualizados
            const updateResponse = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': JSONBIN_API_KEY
                },
                body: JSON.stringify({ users: users })
            });
            
            if (updateResponse.ok) {
                console.log(`Score updated in JSONBin for ${username}: ${score}`);
                // Recargar leaderboard
                loadGlobalLeaderboardSimple();
            }
        }
        
    } catch (error) {
        console.error('Error updating score in JSONBin:', error);
    }
}

// ===== INSTRUCCIONES PARA USAR JSONBIN =====
/*
1. Ve a https://jsonbin.io/
2. Crea una cuenta gratuita
3. Crea un nuevo "bin" con este contenido inicial:
   {
     "users": []
   }
4. Copia el Bin ID y tu API Key
5. Reemplaza las variables al inicio de este archivo
6. Incluye este archivo en tu HTML después de script.js
*/
