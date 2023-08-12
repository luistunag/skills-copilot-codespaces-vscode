function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS']
    console.log(this.name + ' can ' + skills.join(', '))
}