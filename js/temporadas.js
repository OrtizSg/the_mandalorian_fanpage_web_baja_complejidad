document.addEventListener('DOMContentLoaded', () => {
    const seasonsData = {
        "1": {
            banner: "img/temporada_1.webp",
            episodes: [
                { chapter: "Capítulo 1: El Mandaloriano", synopsis: "Un cazarrecompensas mandaloriano persigue a un objetivo para un cliente misterioso." },
                { chapter: "Capítulo 2: El Niño", synopsis: "El Mandaloriano regresa para recoger su recompensa, pero descubre que su nave ha sido desmantelada por Jawas." },
                { chapter: "Capítulo 3: El Pecado", synopsis: "El Mandaloriano, con el corazón apesadumbrado, entrega al Niño a su cliente, pero luego decide rescatarlo." },
                { chapter: "Capítulo 4: Santuario", synopsis: "Buscando refugio, el Mandaloriano y el Niño viajan a un planeta remoto donde ayudan a un pueblo a defenderse de unos incursores." },
                { chapter: "Capítulo 5: El Pistolero", synopsis: "En Tatooine, el Mandaloriano se une a un cazarrecompensas novato para un trabajo, pero las cosas no salen como estaban planeadas." },
                { chapter: "Capítulo 6: El Prisionero", synopsis: "El Mandaloriano se une a una tripulación de mercenarios en una misión para rescatar a un prisionero de una nave de la Nueva República." },
                { chapter: "Capítulo 7: El Ajuste de Cuentas", synopsis: "Un viejo contacto le pide ayuda al Mandaloriano para lidiar con los imperiales en Nevarro, pero es una trampa." },
                { chapter: "Capítulo 8: Redención", synopsis: "Acorralado por Moff Gideon, el Mandaloriano debe proteger a sus aliados y al Niño a toda costa." }
            ]
        },
        "2": {
            banner: "img/temporada_2.webp",
            episodes: [
                { chapter: "Capítulo 9: El Marshal", synopsis: "El Mandaloriano busca a otros de su especie y encuentra a un supuesto Mandaloriano en Tatooine que tiene una armadura familiar." },
                { chapter: "Capítulo 10: La Pasajera", synopsis: "El Mandaloriano transporta a una pasajera con una carga preciosa en un viaje arriesgado." },
                { chapter: "Capítulo 11: La Heredera", synopsis: "En un puerto lunar, el Mandaloriano se encuentra con otros Mandalorianos liderados por Bo-Katan Kryze." },
                { chapter: "Capítulo 12: El Asedio", synopsis: "El Mandaloriano se reúne con viejos aliados en Nevarro para destruir una base imperial." },
                { chapter: "Capítulo 13: La Jedi", synopsis: "El Mandaloriano llega al planeta Corvus para encontrar a Ahsoka Tano, quien revela el nombre y el pasado del Niño." },
                { chapter: "Capítulo 14: La Tragedia", synopsis: "El Mandaloriano lleva a Grogu a un antiguo templo en Tython, pero son emboscados por Moff Gideon." },
                { chapter: "Capítulo 15: El Creyente", synopsis: "Para encontrar el crucero de Gideon, el Mandaloriano necesita la ayuda de un ex-francotirador imperial." },
                { chapter: "Capítulo 16: El Rescate", synopsis: "El Mandaloriano y sus aliados lanzan un audaz asalto al crucero de Moff Gideon para rescatar a Grogu." }
            ]
        },
        "3": {
            banner: "img/temporada_3.webp",
            episodes: [
                { chapter: "Capítulo 17: El Apóstata", synopsis: "El Mandaloriano busca redimirse por haberse quitado el casco y busca las aguas vivientes bajo las minas de Mandalore." },
                { chapter: "Capítulo 18: Las Minas de Mandalore", synopsis: "Din Djarin y Grogu exploran las ruinas de la capital de Mandalore, donde Bo-Katan ve algo increíble." },
                { chapter: "Capítulo 19: El Converso", synopsis: "En Coruscant, un ex-oficial imperial se somete a un programa de amnistía de la Nueva República." },
                { chapter: "Capítulo 20: El Huérfano", synopsis: "Grogu comienza su entrenamiento mandaloriano, y una misión de rescate revela más sobre su pasado." },
                { chapter: "Capítulo 21: El Pirata", synopsis: "Nevarro es atacado por piratas, y Greef Karga pide ayuda a los Mandalorianos." },
                { chapter: "Capítulo 22: Pistoleros a Sueldo", synopsis: "Bo-Katan y Din Djarin viajan a un nuevo planeta para reclutar a un ejército mandaloriano." },
                { chapter: "Capítulo 23: Los Espías", synopsis: "Los Mandalorianos se preparan para retomar su planeta, pero descubren que Moff Gideon ha estado un paso por delante." },
                { chapter: "Capítulo 24: El Regreso", synopsis: "Los Mandalorianos se unen para luchar contra Moff Gideon y sus fuerzas en una batalla final por el control de Mandalore." }
            ]
        }
    };

    const seasonSelect = document.getElementById('season-select');
    const episodeList = document.getElementById('episode-list');
    const bannerContainer = document.getElementById('season-banner-container');

    // Poblar el selector de temporadas
    for (const season in seasonsData) {
        const option = document.createElement('option');
        option.value = season;
        option.textContent = `Temporada ${season}`;
        seasonSelect.appendChild(option);
    }

    // Función para mostrar los episodios y el banner
    const displaySeasonData = (seasonNumber) => {
        episodeList.innerHTML = ''; // Limpiar la lista
        bannerContainer.innerHTML = ''; // Limpiar el banner
        if (!seasonNumber) return;

        const season = seasonsData[seasonNumber];
        
        // Mostrar el banner
        const banner = document.createElement('img');
        banner.src = season.banner;
        banner.alt = `Banner de la temporada ${seasonNumber}`;
        banner.className = 'season-banner';
        bannerContainer.appendChild(banner);

        // Mostrar los episodios
        season.episodes.forEach(episode => {
            const episodeCard = document.createElement('div');
            episodeCard.className = 'episode-card';
            episodeCard.innerHTML = `
                <h3>${episode.chapter}</h3>
                <p>${episode.synopsis}</p>
            `;
            episodeList.appendChild(episodeCard);
        });
    };

    // Event listener para el cambio de temporada
    seasonSelect.addEventListener('change', (event) => {
        displaySeasonData(event.target.value);
    });

    // Mostrar la primera temporada por defecto
    seasonSelect.value = "1";
    displaySeasonData("1");
});