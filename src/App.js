import React,{useState} from "react";
// import {
//   Card,Row,Col,Carousel, Button
// } from 'antd';
import './App.css';
const initState = {
  amount:'',
  denamount: 0,
  pecahan:[]
};

const Denominations = ({data,amount})=>(
  <div>
    <h4>Hasil dari pecahan Rp{amount.toLocaleString()} :</h4>
    {
      data.map((v,i)=>{
        if(v){
          return v.label==='Sisa'?<div key={i}>{v.label} : Rp {v.value},- (no available fraction)</div>:<div key={i}>x{v.value} {parseInt(v.label).toLocaleString()}</div>;
        }else{
          return null;
        }
      }
    )}
  </div>
)

const App = () => {
  const setAmount = (e)=>{
    let val = e.target.value;
    setState({...state,'amount':val});
  }
  
  const calculate = (e)=>{
    let val = state.amount
    if(e.key==="Enter"){
      val = val.replace(/[^0-9]/g, "");
      val = parseInt(val);
      let denamount = val;
      if(val!==''){
        let res = [];
        if(val>=100000){
          let rribuan = Math.floor(val / 100000);
          val = val-(rribuan*100000);
          res.push({label:'100000',value:rribuan});
        }
        if(val>=50000){
          let lprbuan = Math.floor(val / 50000);
          val = val-(lprbuan*50000);
          res.push({label:'50000',value:lprbuan}); 
        }
        if(val>=20000){
          let dpribuan = Math.floor(val / 20000);
          val = val-(dpribuan*20000);
          res.push({label:'20000',value:dpribuan});
        }
        if(val>=10000){
          let spribuan = Math.floor(val / 10000);
          val = val-(spribuan*10000);
          res.push({label:'10000',value:spribuan}); 
        }
        if(val>=5000){
          let lribuan = Math.floor(val / 5000);
          val = val-(lribuan*5000);
          res.push({label:'5000',value:lribuan});
        }
        if(val>=2000){
          let dribuan = Math.floor(val / 2000);
          val = val-(dribuan*2000);
          res.push({label:'2000',value:dribuan});
        }
        if(val>=1000){
          let ribuan = Math.floor(val / 1000);
          val = val-(ribuan*1000);
          res.push({label:'1000',value:ribuan});
        }
        if(val>=500){
          let lratus = Math.floor(val / 500);
          val = val-(lratus*500);
          res.push({label:'500',value:lratus});
        }
        if(val>=100){
          let ratus = Math.floor(val / 100);
          val = val-(ratus*100);
          res.push({label:'100',value:ratus});
        }
        if(val>=50){
          let lp = Math.floor(val / 50); 
          val = val-(lp*50);
          res.push({label:'50',value:lp});
        }
        res.push({label:'Sisa',value:val});
        setState({...state,'pecahan':res,'denamount':denamount});
      }
    }
  }

  const [state,setState] = useState(initState);

  return (
    <div className="App">
        <div className="container">
          <div>
            <label>Input Rupiah:</label>
          </div>
          <div>
            <label>Rp </label><input className="inputAmount" placeholder="Input Amount" name="amount" value={state.amount} type="text" onChange={setAmount} onKeyPress={calculate}></input>
          </div>
          <div>tekan enter untuk melihat hasil</div>
          {
            state.pecahan.length>0?<Denominations data={state.pecahan} amount={state.denamount}/>:null
          }
        </div>
    </div>
  );
}

export default App;


