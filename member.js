function skillsMember() {
    var skills = document.getElementById('skills');
    var memberSkills = document.getElementById('member-skills');
    if (skills && memberSkills) {
        memberSkills.innerHTML = skills.innerHTML;
    }
}