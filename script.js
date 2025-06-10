document.addEventListener('DOMContentLoaded', function() {
    // Gör så att historik-sektionen är synlig från start
    const historiaContent = document.getElementById('historia-content');
    const historiaHeader = historiaContent.previousElementSibling; // Rubriken för historik-sektionen
    historiaContent.style.display = 'block';
    historiaHeader.classList.add('active'); // Lägg till 'active' klassen för att uppdatera pilen

    // Lägger till klickhändelse på alla H2-rubriker i sektionerna
    document.querySelectorAll('.content-section h2').forEach(function(header) {
        header.addEventListener('click', function() {
            // Hitta det tillhörande innehållsdiven
            const content = this.nextElementSibling; // H2:ans nästa syskon är section-content div
            
            // Växla visning av innehållet
            if (content.style.display === 'block') {
                content.style.display = 'none';
                this.classList.remove('active'); // Ta bort 'active' klassen för att ändra pilen
            } else {
                // Dölj alla andra öppna sektioner först
                document.querySelectorAll('.section-content').forEach(function(otherContent) {
                    if (otherContent !== content && otherContent.style.display === 'block') {
                        otherContent.style.display = 'none';
                        otherContent.previousElementSibling.classList.remove('active'); // Ta bort 'active' från dess rubrik
                    }
                });
                
                content.style.display = 'block';
                this.classList.add('active'); // Lägg till 'active' klassen för att ändra pilen
            }
        });
    });
});

// En separat funktion om du vill anropa den från HTML direkt
function toggleSection(id) {
    const sectionContent = document.getElementById(id);
    const header = sectionContent.previousElementSibling;

    if (sectionContent.style.display === 'block') {
        sectionContent.style.display = 'none';
        header.classList.remove('active');
    } else {
        // Dölj alla andra öppna sektioner
        document.querySelectorAll('.section-content').forEach(function(otherContent) {
            if (otherContent !== sectionContent && otherContent.style.display === 'block') {
                otherContent.style.display = 'none';
                otherContent.previousElementSibling.classList.remove('active');
            }
        });
        
        sectionContent.style.display = 'block';
        header.classList.add('active');
    }
}