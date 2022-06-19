import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PeopleIcon from '@material-ui/icons/EmojiPeople';
import FollowingIcon from '@material-ui/icons/Favorite';
import LinkIcon from '@material-ui/icons/Link';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import React, {Component} from 'react';

const styles={
    box:{
        position:"absolute",
        left:"10%",
        top:"10%"
    },
    Hstyle:{
        padding:"0px",
        margin:"0px"
    },
    content:{
        position:"absolute",
        left:"35%",
        top:"23%"
    },
    infor:{
        position:"absolute",
        left:"5%"
    },
    icon:{
        marginTop:"10px",
        marginRight:"5px",
        marginBottom:"-3px",
        fontSize:"30px"
    }
}

class Profile extends Component{
    constructor(props){
        super(props);
        this.state={
            name: null,
            id:null,
            login:null,
            location:null,
            following:null,
            followers:null,
            email:null,
            blog:null
            

        }
    }
    
    componentDidMount(){
        fetch("https://api.github.com/users/cjwu",{method:"GET"})
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            this.setState({name:data.name})
            this.setState({login:data.login})
            this.setState({id:data.id})
            this.setState({location:data.location})
            this.setState({following:data.following})
            this.setState({followers:data.followers})
            this.setState({email:data.email})
            this.setState({blog:data.blog})
        })
        .catch(e=>{
            console.log("error")
        })
    }
    render(){
        return(
            <div>
                <Box sx={{width:"550px"}} style={styles.box}>
                    <Avatar
                        src= "https://avatars.githubusercontent.com/u/1336309?v=4"
                        alt="Remy Sharp"
                        sx={{ width: 150, height: 150 }}
                    />
                    <div style={styles.content}>
                        <h1 style={styles.Hstyle}>{this.state.name}</h1>
                        <h1> </h1>
                        <h2 style={styles.Hstyle}>{this.state.login}</h2>
                       
                    </div>
                    <div style={styles.infor}>
                        <h4> </h4>
                        <h3 style={styles.Hstyle}><AssignmentIndIcon style={styles.icon}/>id: {this.state.id}</h3>
                        <h3 style={styles.Hstyle}><LocationOnIcon style={styles.icon}/>location: {this.state.location}</h3>
                        <h3 style={styles.Hstyle}><PeopleIcon style={styles.icon}/>followers: {this.state.followers}</h3>
                        <h3 style={styles.Hstyle}><FollowingIcon style={styles.icon}/>{this.state.following} following</h3>
                        <h3 style={styles.Hstyle}><LinkIcon style={styles.icon}/>blog: {this.state.blog}</h3>
                    </div>
                </Box>
            </div>
        )
    }
   
}
export default Profile