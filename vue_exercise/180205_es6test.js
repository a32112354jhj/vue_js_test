var name = 'haha';

var saymyname = function() {
    console.log(this.name);
}

var teacher = {
    name = 'gggg',
}

saymyname();
teacher.saymyname = saymyname;
teacher.saymyname();