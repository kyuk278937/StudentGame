const groups = ["Всі", "10-А", "10-Б"];

const students = [
    [
        {
            name: "Боровий Артур",
            game_name: "Дід проти москалів",
            description: "---",
            game: "https://23a-bam.github.io/Phaser2ndGame/",
            git: "https://github.com/23a-bam/Phaser2ndGame",
            poll: "https://forms.gle/sS7tuJWJuGDjmHB98",
        },
    ],
    [],
]

const game_list = document.getElementById("games_list");
const dropdown = document.getElementById("groups-dropdown");

students.forEach(group =>{
    group.forEach(student_info =>{
        game_list.innerHTML += 
        `<div class="game_info"   onclick="redirectToNewPage('/game_page.html', '${student_info.name}')">
            <div class="logo_div">
                <img src="game_logo/${student_info.name}.png" alt="іконка гри">
            </div>
            <h3>${student_info.game_name}</h3>
            <p>${student_info.description}</p>
        </div>`
    });
});

function redirectToNewPage(url, student) {
    localStorage.setItem('student', student)
    window.location.href = url;
}