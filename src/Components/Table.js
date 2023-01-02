import React,{useRef,useEffect} from 'react';
import { Card,CardText,CardTitle,Row,Col,Button,CardBody, Container } from 'reactstrap';
import 'react-calendar/dist/Calendar.css';
import {Cases2} from '../Components/Tablepart/Cases2';
import '../CSS/Table.css';
import Printing1 from '../Components/Printing1';
import {FaDownload} from "react-icons/fa";
import {RxDotFilled} from "react-icons/rx";
import Confetti from '../Components/confetti';


export const Table=(pro)=>{
    const componentRef=useRef();
    const componentRef1 = React.createRef();
    const componentRef2=React.createRef();
    const [showResults, setShowResults] = React.useState(false)
    const [show, setShow] = React.useState(false);
    const [hideShow, setHideShow] = React.useState(false);
    const [blast, setBlast] = React.useState(true);

    const a=parseInt(pro.dd);
    const b=parseInt(pro.mm);
    const x=pro.yyyy;
    const y=x.toString()
    const c=Number(y[0]+y[1])
    const d=Number(y[2]+y[3])
    const handleClose = () => setShow(false);
    const handleShow = (value) => {
        setShow(true);
        setHideShow(true)
        setShowResults(true)
    };

/* Printing
    const handlePrint=useReactToPrint({
        content:()=>componentRef.current,
        documentTitle:'Magic Square',
        onAfterPrint:()=>alert('print success')
    })
    const handlePrint1=useReactToPrint({
        content:()=>componentRef1.current,
        documentTitle:'Magic Square',
        onAfterPrint:()=>alert('print success')
    })
*/

    const onClick = () => {
        if (showResults===false){
            setHideShow(true)
            setShowResults(true)
            setBlast(true)
        }
        else{
            setHideShow(false)
            setShowResults(false)
        }
        
    }
    const cases1=(cc)=>{
        const find1=(values,dd)=>{
            for(var i=0;i<4;i++){
                if (((~dd.indexOf(values[i]))<0) || (values[i]<0)){
                    return(false)
                }
                else{
                }      
        }
        return(true)
        }
        const looping1=((dd)=>{
            for(var i=0;i<15;i++){
                if ( dd[i]<0){
                    return(false)
                }
                else{
                }      
            }
            return(true)

        })
        const looping=(values,values1,values2,dd)=>{
            const status1=find1(values,dd)
            if (status1===true){
                dd.concat([values])
                const status2=find1(values1,dd)
                if (status2===true){
                    dd.concat([values2])
                    const status3=find1(values2,dd)
                    if(status3===true){
                        return(true)
                    }
                    else{
                        return(false)
                    }
                }
                else{
                    return(false)
                }
            }
            else{
                return(false)
            }
        }

        if (cc===0){
            const dd=[a,a+1,a+2,a+3];
            const values=[b-3,b-2,b-1,b]
            const values1=[c+1,c,c-1,c-2]
            const values2=[d+2,d+1,d,d-1] 
            return(looping(values,values1,values2,dd))
        }
        if(cc===1){
            const dd=[a-3,a-2,a-1,a];
            const values=[b,b+1,b+2,b+3]
            const values1=[c-1,c,c+1,c+2]
            const values2=[d-2,d-1,d,d+1] 
            return(looping(values,values1,values2,dd))
        }
        if(cc===2){
            const dd=[a-2,a-1,a,a+1];
            const values=[b-1,b,b+1,b+2]
            const values1=[c,c+1,c+2,c+3]
            const values2=[d-3,d-2,d-1,d] 
            return(looping(values,values1,values2,dd))
        }
        if(cc===3){
            const dd=[a-1,a,a+1,a+2];
            const values=[b-2,b-1,b,b+1]
            const values1=[c,c-1,c-2,c-3]
            const values2=[d,d+1,d+2,d+3] 
            return(looping(values,values1,values2,dd))
        }
        if (cc===4){
            const dd=[a-1,a,a+1,a+2,b-2,b-1,b,b+1,c,c-1,c-2,c-3,d,d+1,d+2,d+3];
            return(looping1(dd))
        }
        if(cc===5){
            const dd=[a,a+1,a+2,a+3,b-3,b-2,b-1,b,c+1,c,c-1,c-2,d+2,d+1,d,d-1];
            return(looping1(dd))
        }
    }
    const colorlooping=(ind,lst,lst1,lst2)=>{
        if ((~[2].indexOf(diffcases))<0){
            if ((~lst.indexOf(ind))<0){
                return(selectyours[0])
            }
            else if ((~lst1.indexOf(ind))<0){
                return(selectyours[1])
            }
            else{
                return(selectyours[2])
            }
        }
        if ((~[0,1,3,4].indexOf(diffcases))<0){
            if ((~lst.indexOf(ind))<0){
                return(selectyours[1])
            }
            else if((~lst1.indexOf(ind))<0){
                return(selectyours[4])
            }
            else if((~lst2.indexOf(ind))<0){
                return(selectyours[2])
            }
            else{
                return(selectyours[0])
            }
        }
        
    }
    const selectcolor=(ind)=>{
        //console.log(diffcases)
        if (diffcases===0){return(colorlooping(ind,[1,2,3,4],[5,6,7,8],[9,10,11,12]))}
        if (diffcases===1){return(colorlooping(ind,[1,5,9,13],[2,6,10,14],[3,7,11,15]))}
        if (diffcases===2){return(colorlooping(ind,[1,6,11,16],[4,7,10,13]))}
        if (diffcases===3){return(colorlooping(ind,[1,4,13,16],[6,7,10,11],[2,3,14,15]))}
        if (diffcases===4){return(colorlooping(ind,[1,2,5,6],[3,4,7,8],[9,10,13,14]))}

    }
    const researchTitles=[0,1,2,3,4]
    const xx=[0,1,2,3,4]
    const colorselector=['#E6B0AA','#D7BDE2','#A3E4D7','#FAD7A0','#D5DBDB','#AED6F1','#AEB6BF','#D7BDE2','#A2D9CE','#F9E79F']

    const selectyours=xx.map((item)=>{
        const rand=colorselector[Math.floor(Math.random() * colorselector.length).toFixed()];
        var index = colorselector.indexOf(rand);
            if (index > -1) { 
            colorselector.splice(index, 1);
            }
            return(rand)
            
        })
    
    const diffcases=researchTitles[Math.floor(Math.random() * researchTitles.length.toFixed())]
    const sumofvalues=a+b+c+d;
    const helloo=()=>{
        const lst=['EACH ROW','EACH COLUMN','DIAGONALS','CORNERS,TOP-BOTTOM & LEFT-RIGHT MIDDLES','TOP-LEFT,TOP-RIGHT,BOTTOM-LEFT,BOTTOM-RIGHT']
        return(lst[diffcases])
    }
    const lst=['EACH ROW','EACH COLUMN','CROSS-LEFT','CROSS-RIGHT','CORNERS','CENTER','TOP-BOTTOM MIDDLE','LEFT-RIGHT MIDDLE','TOP-LEFT','TOP-RIGHT','BOTTOM-LEFT','BOTTOM-RIGHT']
    
    const mainfn=(a,b,c,d,e)=>{   
        for (var i=0;i<16;i++){
            if (a[i]<10){
                a[i]='0'+a[i]
            }}
        window.rowvalues=a;
        return( 
            <div>
            <div ref={componentRef2} className="marginforall">
            <div className='brdr'> 
            <center>
            <CardTitle tag="h6"  className='titleheading'> MAGIC TABLE for<em style={{color:'#2980B9'}}> {pro.dd}-{pro.mm}-{pro.yyyy} </em></CardTitle>

            </center>
               <Container className='col-lg-12'>
                <Row>
                    <Container className='col-lg-1' ></Container>
                    <Container className='col-lg-5 brdrstyling'>
                    <div ref={componentRef} className='col-lg-10 col-md-8'>
                                <Card body  className='forbrdrstyling' style={{border:'none'}}>
                                    <CardText>
                                        <table  className='table' style={{border:'1px',borderStyle:'solid',borderRadius:'6px',borderColor:'#0794f2'}}>
                                            <tr>
                                                <td className='td1' style={{backgroundColor:selectcolor(1),color:'black'}}>{a[0]}</td>
                                                <td className='td1' style={{backgroundColor:selectcolor(2),color:'black'}}>{a[1]}</td>
                                                <td className='td1' style={{backgroundColor:selectcolor(3),color:'black'}}>{a[2]}</td>
                                                <td  className='td1' style={{backgroundColor:selectcolor(4),color:'black'}}>{a[3]}</td>
                                            </tr>
                                            <tr>
                                                <td className='td' style={{backgroundColor:selectcolor(5),color:'black'}}>{a[4]}</td>
                                                <td className='td' style={{backgroundColor:selectcolor(6),color:'black'}}>{a[5]}</td>
                                                <td className='td' style={{backgroundColor:selectcolor(7),color:'black'}}>{a[6]}</td>
                                                <td className='td' style={{backgroundColor:selectcolor(8),color:'black'}}>{a[7]}</td>
                                            </tr>
                                            <tr>
                                                <td className='td' style={{backgroundColor:selectcolor(9),color:'black'}}>{a[8]}</td>
                                                <td className='td' style={{backgroundColor:selectcolor(10),color:'black'}}>{a[9]}</td>
                                                <td className='td' style={{backgroundColor:selectcolor(11),color:'black'}}>{a[10]}</td>
                                                <td className='td' style={{backgroundColor:selectcolor(12),color:'black'}}>{a[11]}</td>
                                            </tr>
                                            <tr>
                                                <td className='td' style={{backgroundColor:selectcolor(13),color:'black'}}>{a[12]}</td>
                                                <td className='td' style={{backgroundColor:selectcolor(14),color:'black'}}>{a[13]}</td>
                                                <td className='td' style={{backgroundColor:selectcolor(15),color:'black'}}>{a[14]}</td>
                                                <td className='td' style={{backgroundColor:selectcolor(16),color:'black'}}>{a[15]}</td>
                                            </tr>
                                        </table>
                                    </CardText> 
                                    <CardTitle tag="h6" className='head'>Sum of <span>{helloo()}</span> equals to <em style={{color:'#2980B9'}}>{sumofvalues}</em></CardTitle>
                                </Card>
                             </div>
                    </Container>
                    <Container className='offset-lg-0 col-lg-5 brdrstyling1' id='sub1'>
                    <Card body style={{border:'none'}}>
                                <div className='cardtext'>
                                    <CardTitle className='cardtitltext'>
                                        <h4>Hey !! you..,</h4><br></br>
                                        <h4><RxDotFilled className='dotcolor'></RxDotFilled>Observe the first ROW once..</h4>
                                        <h4> Its <i className='numstyling'>"{pro.dd}-{pro.mm}-{pro.yyyy}"</i>  your special day.</h4><br></br>
                                         <h4><RxDotFilled className='dotcolor'></RxDotFilled> Sum of <em className='numstyling'>"{pro.dd}+{pro.mm}+{a[2]}+{a[3]}"</em> = <em className='numstyling1' style={{color:'#2980B9'}}>{sumofvalues}</em><br></br>
                                        also Named as <span className='numstyling1'>Magic Number.</span></h4><br></br>
                                        <h4><RxDotFilled className='dotcolor'></RxDotFilled>Adding any <var>Four</var> Numbers from the table tends to produce equal value i.e - <var>Rows , Columns , Corners , Diagonals , Top-Bottom-Left-Right-Center.</var></h4>
                                    </CardTitle>
                                    <button className="savebutton" onClick={handleShow}>SAVE <FaDownload></FaDownload></button>
                                    <Printing1 show={show} handleClose={handleClose} componentRef1={componentRef1} componentRef={componentRef} componentRef2={componentRef2}/>
                                </div>
                            </Card>
                    </Container>
                    <Container className='col-lg-1'>
                    </Container>
                </Row>
               
               </Container>
            </div>
            <div>
            <button  className={hideShow?'showmore1':'showmore'} style={{verticalAlign:'middle'}} value="hello" onClick={onClick}><span>{hideShow?'Hide the Detials':'View in Detail'}</span></button>

            </div>
            <div ref={componentRef1}>
                { showResults ? <Cases2 a={window.rowvalues} style_type={lst} /> : null} 
            </div>
        </div>
        {blast?<Confetti id='hideMeAfter5Seconds' numberOfPieces='1000'/>:null}
        </div>
        )
    }

    const common=()=>{
        const cc=4;
        if (cases1(cc)){
            return(mainfn([a,b,c,d,d+3,c-3,b-1,a+1,b-2,a+2,d+2,c-2,c-1,d+1,a-1,b+1]))
        }
        else{
            const cc=5
            if(cases1(cc)){
                return(
                    mainfn([a,b,c,d,d+1,c-1,b-3,a+3,b-2,a+2,d+2,c-2,c+1,d-1,a+1,b-1])
                )
            }
            else{
                return(<h1>sorry,cannot able to create Magic Table for {pro.dd}-{pro.mm}-{pro.yyyy}</h1>)
            }
        }

    }
    if ((a!==b) && (a!==c) && (a!==d) && (b!==c) && (b !==d) && (c!==d)){
        const cc=0
        if (cases1(cc)){
            return(
               mainfn([a,b,c,d,d+1,c-1,b-3,a+3,b-2,a+2,d+2,c-2,c+1,d-1,a+1,b-1]) 
            ) 
        }
        else{
            const cc=1;
            if (cases1(cc)){
                return(mainfn([a,b,c,d,d-1,c+1,b+3,a-3,b+2,a-2,d-2,c+2,c-1,d+1,a-1,b+1]))
            }
            else{
                const cc=2;
                if (cases1(cc)){
                    return(mainfn([a,b,c,d,d-3,c+3,b+1,a-1,b+2,a-2,d-2,c+2,c+1,d-1,a+1,b-1]))
                }
                else{
                    const cc=3;
                    if (cases1(cc)){
                        return(mainfn([a,b,c,d,d+3,c-3,b-1,a+1,b-2,a+2,d+2,c-2,c-1,d+1,a-1,b+1]))
                    }
                    return(common())
                    
                }

            }
            }    
    }
    else{
        return(common())}

/*
testting1 :
        <div className='brdr'> 
                <Row>
                <Col md="6">
                    <Card body>
                        <CardTitle tag="h5">Your's Magic Date: <span>{pro.dd}-{pro.mm}-{pro.yyyy}</span> </CardTitle>
                        <CardText>
                        <table  className='col-6 GFG'>
                            <tr  className='GFG'>
                                <td style={{backgroundColor:selectcolor(1),color:'black'}}>{a[0]}</td>
                                <td style={{backgroundColor:selectcolor(2),color:'black'}}>{a[1]}</td>
                                <td style={{backgroundColor:selectcolor(3),color:'black'}}>{a[2]}</td>
                                <td style={{backgroundColor:selectcolor(4),color:'black'}}>{a[3]}</td>
                            </tr>
                            <tr>
                                <td style={{backgroundColor:selectcolor(5),color:'white'}}>{b[0]}</td>
                                <td style={{backgroundColor:selectcolor(6),color:'white'}} >{b[1]}</td>
                                <td style={{backgroundColor:selectcolor(7),color:'white'}}>{b[2]}</td>
                                <td style={{backgroundColor:selectcolor(8),color:'white'}}>{b[3]}</td>
                            </tr>
                            <tr>
                                <td style={{backgroundColor:selectcolor(9),color:'white'}}>{c[0]}</td>
                                <td style={{backgroundColor:selectcolor(10),color:'white'}}>{c[1]}</td>
                                <td style={{backgroundColor:selectcolor(11),color:'white'}}>{c[2]}</td>
                                <td style={{backgroundColor:selectcolor(12),color:'white'}}>{c[3]}</td>
                            </tr>
                            <tr>
                                <td style={{backgroundColor:selectcolor(13),color:'white'}}>{d[0]}</td>
                                <td style={{backgroundColor:selectcolor(14),color:'white'}}>{d[1]}</td>
                                <td style={{backgroundColor:selectcolor(15),color:'white'}}>{d[2]}</td>
                                <td style={{backgroundColor:selectcolor(16),color:'white'}}>{d[3]}</td>
                            </tr>
                        </table>
                        </CardText>
                        
                    </Card>
                </Col>
                <Col md="6" className='contentbox'>
                    <div className='cardtext'>
                    <CardTitle><h4>Adding any four values gives equal sum</h4></CardTitle>
                    <CardTitle><h4>(edge,top-bottom-left-right corners,midddle)</h4></CardTitle>
                    </div>
                    
                    <Card body className='nobrdr'>
                         <CardText><h4 className='forbrdr'>sum of <Badge bg="secondary">{helloo()} </Badge>values is <span>{sumofvalues} </span></h4></CardText>
                        <Button>Print</Button>
                    </Card>
                </Col>
                
                </Row>
            </div

endof testing 1

      const colorselector=['#6495ED','#CCCCFF','#00FF00','#FF00FF','#C0C0C0','#FFEFD5 ','#66BB55','#CCFF33','#666699','#99FFCC','#6699FF','#FFCC66','#666666','#db7093','#bc8f8f','#f4a460']
        const selectyours=xx.map((item)=>{
            return(colorselector[Math.floor(Math.random() * researchTitles.length)] )
        })
style={{backgroundColor:selectcolor(2,diffcases)}}
return(

                <div>
                    <h1 className='bondr'>= = = = = = = =  =</h1>
                    <h1><span> || </span>{a}<span> | </span> {b} <span> | </span>{c}<span> | </span>{d}<span> || </span></h1>
                    <span className='init'>__ __ __ __  __</span>
                    <h1><span> || </span>{d-3}<span> | </span>{c+3}<span> | </span>{b+1}<span> | </span>{a-1}<span> || </span></h1>
                    <h1><span> || </span>{b+2}<span> | </span>{a-2}<span> | </span>{d-2} <span> | </span>{c+2}<span> || </span></h1>
                    <h1><span> || </span>{c+1}<span> | </span>{d-1}<span> | </span>{a+1}<span> | </span>{b-1}<span> || </span></h1>
                    <h1 className='bondr1'>= = = = = = = =  =</h1>
                    
                </div>
                )
*/ 
/*

<div class="card border-secondary mb-3 crd">
                <div class="card-header">Header</div>
                <div class="card-body text-secondary">
                    <h5 class="card-title">Secondary card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>

            </div>


<div className='row'>
            <div className='container col-sm-12'>  
            <div className='col-6'>
            <table  className='col-6 GFG'>
                <tr  className='GFG'>
                    <td style={{backgroundColor:selectcolor(1),color:'black'}}>{a[0]}</td>
                    <td style={{backgroundColor:selectcolor(2),color:'black'}}>{a[1]}</td>
                    <td style={{backgroundColor:selectcolor(3),color:'black'}}>{a[2]}</td>
                    <td style={{backgroundColor:selectcolor(4),color:'black'}}>{a[3]}</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:selectcolor(5),color:'white'}}>{b[0]}</td>
                    <td style={{backgroundColor:selectcolor(6),color:'white'}} >{b[1]}</td>
                    <td style={{backgroundColor:selectcolor(7),color:'white'}}>{b[2]}</td>
                    <td style={{backgroundColor:selectcolor(8),color:'white'}}>{b[3]}</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:selectcolor(9),color:'white'}}>{c[0]}</td>
                    <td style={{backgroundColor:selectcolor(10),color:'white'}}>{c[1]}</td>
                    <td style={{backgroundColor:selectcolor(11),color:'white'}}>{c[2]}</td>
                    <td style={{backgroundColor:selectcolor(12),color:'white'}}>{c[3]}</td>
                </tr>
                <tr>
                    <td style={{backgroundColor:selectcolor(13),color:'white'}}>{d[0]}</td>
                    <td style={{backgroundColor:selectcolor(14),color:'white'}}>{d[1]}</td>
                    <td style={{backgroundColor:selectcolor(15),color:'white'}}>{d[2]}</td>
                    <td style={{backgroundColor:selectcolor(16),color:'white'}}>{d[3]}</td>
                </tr>
            </table>
            </div>
            <div className='col-6'>
                <p className="justify-content-sm-left dateheading">Your's Magic Date: {pro.dd}-{pro.mm}-{pro.yyyy}</p>      
                <h1>sum of<span> {helloo()} </span>values is <span>{sumofvalues} </span></h1>
            </div>
            </div>
            
            </div>
        */  
    
    
}

