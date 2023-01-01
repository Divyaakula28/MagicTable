import React, {useState,Component } from 'react';
import {Link,Router} from "react-router-dom";
import '../CSS/datapicker.css';

class Datapicker extends Component  {
        state = {
        startDate:'2005-07-28',
          urlDate:'28-07-2005',
          showCalendar: false,
          cond:false,
          for_button:'forbutton'
        }
        handlechange=(e)=>{
            const k=e.target.value;
            const date=k.split('-')
            this.setState({startDate:e.target.value,urlDate:date[2]+'-'+date[1]+'-'+date[0]})
        }

    render(){
    return(
        <center>
        <input className='col-xs-4 datebox' type="date"  onkeydown="return false" id="myDate" placeholder="dd-mm-yyyy" value={this.state.startDate}  onChange={this.handlechange}/>
        <Link to={{pathname: "/magic_table",search:`?DOB=${this.state.urlDate}`}} state={this.state.startDate}><button className='forbutton1'>Check Here </button></Link>
        </center>
    )
    }
}







export default Datapicker;









/*
import React, {useState } from 'react';
import DatePicker from "react-datepicker";
import getYear from "date-fns/getYear";
import 'react-datepicker/dist/react-datepicker.css';

function Datapicker()  {
    const [startDate, setStartDate] = useState(new Date());
    const range = (start, end) => {
        return new Array(end - start).fill().map((d, i) => i + start);
      }; 
      const years = range(1990, getYear(new Date()));

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return (
      <DatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {"<"}
            </button>
            <select
            value={(date).getYear()}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
  
            <select
              value={months[(date).getMonth()]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
  
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {">"}
            </button>
          </div>
        )}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        withPortal
      />
    );
  };
export default Datapicker;
*/