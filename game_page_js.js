const student = localStorage.getItem('student');

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

const game_img = document.getElementById('game_img_div');
const game_info_page = document.getElementById('game_info_page');

game_img.innerHTML += `<img src="game_logo/${student}.png" alt="іконка гри">`;

students.forEach(group =>{
    group.forEach(student_info =>{
        console.log(student_info)
        if(student_info.name == student){
            game_info_page.innerHTML += 
            `
            <div class="info">
                <h3 id="game_name">${student_info.game_name}</h3>
                <p id="game_description">${student_info.description}</p>
            </div>
            <div class="buttons">
                    <a href=${student_info.game}>Грати</a>
                    <a href=${student_info.poll}>Оцінити</a>
                    <a href=${student_info.git}>Git Hub</a>
            </div>
            `
        }
    });
});