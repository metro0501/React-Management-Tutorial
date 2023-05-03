
import './App.css';
import React ,{ Component } from 'react';
import Customer from './compoments/Customer';

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '홍길동',
  'birthday' : '961222',
  'gender' :'남자'
}
,
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/any/2',
  'name' : '홍동2',
  'birthday' : '961222',
  'gender' :'남자'
}
,{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/any/3',
  'name' : '홍길3',
  'birthday' : '961222',
  'gender' :'남자'
}
]

class App extends Component {
  render() {
    return (
             <div className='gray-background'> 
              <Customer/>
              </div>
    );
      
    
  }
}

export default App;
