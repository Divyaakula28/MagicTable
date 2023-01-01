import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "./Table";
import Calendar from "react-calendar";
import Navfooter from "../Components/Nav_footer";
import '../CSS/Apps.css';
import { useSearchParams } from "react-router-dom";
import Confetti from 'react-confetti';
import '../CSS/confetti.css';
import '../CSS/datapicker.css';



class Secondpage extends Component {
    searchParams = new URLSearchParams(document.location.search);
    url = new URL(window.location.href);
    lang = this.url.hash.split("?")[1].split("=")[1];

  constructor(props) {
    super(props);
    this.state = {
      Date:this.lang.slice(6,10)+'-'+this.lang.slice(3,5)+'-'+this.lang.slice(0,2),
      urlDate:this.lang,
      Dates:this.lang.slice(0,2),
      Months:this.lang.slice(3,5),
      Years:this.lang.slice(6,10),
      fisrtone:(new Date(this.lang.slice(3,5)+' '+this.lang.slice(0,2)+' '+this.lang.slice(6,10))),
      nochnge:true,
      blast:false,
      cnt:1,
      timmer:0
    }; 
  }
  CallTable = () => {
    return (
      <Table yyyy={this.state.Years} mm={this.state.Months} dd={this.state.Dates}/>
    );
  };

  componentDidMount() {

    const intervalId = setInterval(() => {
      this.setState(prevState => {
        return {
          Date: (this.state.Date),
        };
        
      });
    }, 4000);
  }


  datechange = (e) => {
  /*for auto url chnage
    this.searchParams.set('DOB',e.target.value)
    window.location.search=this.searchParams.toString();
    */
    this.setState({for_button:'forbutton'})
    const k=e.target.value;
    const date=k.split('-')
     const yy=date[0]
     const mm=date[1]
     const dd=date[2]
    this.setState({Date:k,urlDate:date[2]+'-'+date[1]+'-'+date[0],Dates:dd,Months:mm,Years:yy,nochnge:false });
    };
  
  
  updating=()=>{
    if (this.state.nochnge===false){
      this.setState({nochnge:true,blast:false,timmer:1})
    }

    this.setState({jj:true});
  }
    

  render() {
    console.log(this.state.Date)
    if (this.state.Date.length!==10 || !isNaN(this.state.Dates) === false || !isNaN(this.state.Months) === false || !isNaN(this.state.Years) === false|| this.lang.slice(2,3)!=='-' || this.lang.slice(5,6)!=='-') {
      return <h1>error</h1>;
    } 
    else{
      return (
        <div className="marginforall">
          <Navfooter/>
          <center>
            <div  className="input-group  justify-content-sm-center justify-content-center pt-md-2 pt-sm-3">
            <center>
        <input className='col-xs-4 datebox' type="date" onkeydown="return false" id="myDate" placeholder="dd-mm-yyyy" value={this.state.Date}  onChange={this.datechange}/>
        <Link to={{pathname: "/magic_table",search:`?DOB=${this.state.urlDate}`}} state={this.state.startDate}><button onClick={this.updating} className='forbutton1'>Check Here </button></Link>
        </center>
            </div>
            {this.state.nochnge?this.CallTable():undefined}
          </center>
        </div>
      );
    }
  }
  
}

export default Secondpage;

/*


componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState(prevState => {
        return {
          Date: this.searchParams.get("DOB"),
        };
      });
    }, 3000);
  }
  
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
------------------------------------
const [searchParams, setSearchParams] = useSearchParams();
  const DOB = searchParams.get("DOB");
  const yy = DOB.slice(0, 4);
  const mm = DOB.slice(5, 7);
  const dd = DOB.slice(8, 10);
  setSearchParams('2023-12-22')
  if (
    DOB.length !== 10 ||
    !isNaN(yy) === false ||
    !isNaN(mm) === false ||
    !isNaN(dd) === false
  ) {
    return <h1>error</h1>;
  } else
    return (
      <div>
        <h1>{DOB ? mm : "go to hello"}</h1>
      </div>
      
    );
  let query = useQuery();
  const DOB = query.get("DOB");
  const yy = DOB.slice(0, 4);
  const mm = DOB.slice(5, 7);
  const dd = DOB.slice(8, 10);
  if (
    DOB.length !== 10 ||
    !isNaN(yy) === false ||
    !isNaN(mm) === false ||
    !isNaN(dd) === false
  ) {
    return <h1>error</h1>;
  } else
    return (
      <div>
        <h1>{query ? mm : "go to hello"}</h1>
      </div>

    );
    */
