export class User {
    constructor(user: User,private iduser?: string, private login?: string, private mdp?: string, private role?: string, private useremail?: string) {
        this.iduser = user.iduser;
        this.login = user.login;
        this.mdp = user.mdp;
        this.role = user.role;
        this.useremail = user.useremail;
    }
    ToString = (): String => {
        return 'iduser ' + this.iduser
            + ' login ' + this.login
            + ' role ' + this.role
            + ' useremail ' + this.useremail
    }
}