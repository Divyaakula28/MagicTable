<div ref={componentRef2}>
                <div className='brdr'> 
                    <Row>
                        <Col md="6"  className='contentbox offset-md-1'>
                            <div ref={componentRef} id='print'>
                                <Card body className='nobrdr' style={{border:'none'}}>
                                    <CardText>
                                        <table  className='col-5 GFG table'>
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
                                    <CardText tag="h6" className='head'>Sum of <span>{helloo()}</span> values is  <h5 style={{color:'red'}}>{sumofvalues} </h5></CardText>
                                </Card>
                             </div>
                        </Col>
                        <Col md="6" className='contentbox contentbox1' style={{width: '28rem'}}>
                            <Card body className='' mt='5'>
                                <h5>hey ! you..,observe the first row..<br></br>
                                Its {pro.dd}-{pro.mm}-{pro.yyyy} your special day.<br></br>
                                the sum of {pro.dd} + {pro.mm} + {pro.yyyy} = {sumofvalues} 
                                </h5>
                                <Row>
                                     <CardTitle className="mb-2  mt-3 col-md-8 text-center"  tag="h5"><u>Magic Number</u></CardTitle>
                                    <CardTitle className='magicNum col-md-4' style={{color:'red'}}>{sumofvalues}</CardTitle>
                                </Row>
                                <h5>
                                    The sum for every row,every column,diagonals,corners is SAME
                                </h5>
                                <CardBody>
                                    <Button variant="primary" onClick={handleShow}>Save</Button>
                                    <Printing1 show={show} handleClose={handleClose} componentRef1={componentRef1} componentRef={componentRef} componentRef2={componentRef2}/>
                                </CardBody>
                            </Card>
                     
                        </Col>
                        <Col md='10'></Col>
                        <Col>
                            <button bg='white' className='showmore'  style={{textDecoration: 'none'}} value="hello" onClick={onClick}>{hideShow?'<<ShowLess':'>>ShowMore'}</button></Col>
                    </Row>
                
                </div>





                <div className='forcard'>
            <div className='brdr'> 
            <Row>
                <Col md="6">
                <div ref={componentRef} id='print'>
                    <Card body>
                        <CardText>
                        <table  className='col-6 GFG table'>
                            <tr  className='GFG'>
                                <td className='td1' style={{backgroundColor:selectcolor(1),color:'black'}}>{a[0]}</td>
                                <td className='td1' style={{backgroundColor:selectcolor(2),color:'black'}}>{a[1]}</td>
                                <td className='td1' style={{backgroundColor:selectcolor(3),color:'black'}}>{a[2]}</td>
                                <td className='td1' style={{backgroundColor:selectcolor(4),color:'black'}}>{a[3]}</td>
                            </tr>
                            <tr>
                                <td className='td' style={{backgroundColor:selectcolor(5),color:'black'}}>{a[4]}</td>
                                <td className='td' style={{backgroundColor:selectcolor(6),color:'black'}} >{a[5]}</td>
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
                                <td className='td'style={{backgroundColor:selectcolor(13),color:'black'}}>{a[12]}</td>
                                <td className='td'style={{backgroundColor:selectcolor(14),color:'black'}}>{a[13]}</td>
                                <td className='td'style={{backgroundColor:selectcolor(15),color:'black'}}>{a[14]}</td>
                                <td className='td' style={{backgroundColor:selectcolor(16),color:'black'}}>{a[15]}</td>
                            </tr>
                        </table>
                        </CardText>
                        <CardText tag="h5">Sum of <span>{helloo()}</span> values is {sumofvalues}</CardText>

                        
                    </Card>
                    </div>
                </Col>
                <Col md="6" className='contentbox'>
                    <div className='cardtext'>
                    <CardTitle className='cardtitltext'>
                        <h4>Hey !! you..,</h4><br></br>
                        <h4>Observe the first ROW..</h4>
                        <h4> Its "{pro.dd}-{pro.mm}-{pro.yyyy}" your special day.</h4><br></br>
                        <h4>The sum of {pro.dd} + {pro.mm} + {pro.yyyy} = {sumofvalues}</h4> 
                    </CardTitle>
                    <CardTitle tag="h4">that's so called <u>Magic Number</u> {sumofvalues}</CardTitle>  
                    <CardTitle><h4>Adding any four values gives equal sum (edge,top-bottom-left-right corners,midddle)</h4></CardTitle>
                    </div>
                    
                    <Card body className='nobrdr'>
                        <Button>SAVE</Button>
                    </Card>

                </Col>
                
                </Row>
            </div>
            <Row>
            <button bg='white' className='showmore'  style={{textDecoration: 'none'}} value="hello" onClick={onClick}>{hideShow?'<<ShowLess':'>>ShowMore'}</button>
            </Row>
            <div ref={componentRef1}>
                    { showResults ? <Cases2 a={window.rowvalues} style_type={lst} /> : null}   
                </div>



                <div ref={componentRef2} className="marginforall">
                <div className='brdr'> 
                    <Row>
                        <Col md="6" xs='12' className='col-md-6 col-xm-12 col-sm-8 contentbox'>
                            <div ref={componentRef}>
                                <Card body  className='col-md-6 col-xm-12 col-sm-8 forbrdrstyling' style={{border:'none'}}>
                                    <CardText>
                                        <table  className='col-6 GFG table'>
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
                                    <CardTitle tag="h6" className='head'>Sum of <span>{helloo()}</span> values is {sumofvalues}</CardTitle>
                                </Card>
                             </div>
                        </Col>
                        <Col md="6" xs='12' className='contentbox' style={{width: '25rem'}}>
                            <Card body style={{borderStyle:'groove',borderColor:'#2980B9',borderRadius:'0px',borderRight:'0',borderTop:'0',borderBottom:'0'}}>
                                <div className='cardtext'>
                                    <CardTitle className='cardtitltext'>
                                        <h4>Hey !! you..,</h4>
                                        <h4><li>Once Notice the first ROW..</li></h4>
                                        <h4> Its <i className='numstyling'>"{pro.dd}-{pro.mm}-{pro.yyyy}"</i>  your special day.</h4><br></br>
                                        <h4><li>Sum of <em className='numstyling'>"{pro.dd}+{pro.mm}+{pro.yyyy}"</em> = <em className='numstyling1' style={{color:'#2980B9'}}>{sumofvalues}</em><br></br>
                                        also Named as <u className='numstyling1'>Magic Number</u></li></h4>  <br></br>
                                    <CardTitle tag="h4"><li>Adding any <var>Four</var> Numbers from the table gives equal value i.e - <var>Rows , Columns , Corners , Diagonals , Top-Bottom-Left-Right-Center.</var></li></CardTitle>
                                    </CardTitle>
                                    <button className="savebutton" onClick={handleShow}>SAVE <FaDownload></FaDownload></button>
                                    <Printing1 show={show} handleClose={handleClose} componentRef1={componentRef1} componentRef={componentRef} componentRef2={componentRef2}/>
                                </div>
                            </Card>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </div>
                <div>
                <button  className='showmore' value="hello" onClick={onClick}>{hideShow?'<<View in Detail':'>>View in Detail'}</button>

                </div>
                <div ref={componentRef1}>
                    { showResults ? <Cases2 a={window.rowvalues} style_type={lst} /> : null}   
                </div>
            </div>