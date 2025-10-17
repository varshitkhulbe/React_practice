import List from './List.jsx';
import Button from './Button.jsx';
import MyComponent from './MyComponent.jsx';
import Counter from './Counter.jsx';
import MyComponent2 from './MyComponent2.jsx';
import Colorpicker  from './Colorpicker.jsx';
import MyComponent3 from './MyComponent3.jsx';
function App()
{
   const fruits=[{id:1,name:"Apple",calory:95},
                 {id:2,name:"Orange",calory:45},
                 {id:3,name:"Banana",calory:105},
                 {id:4,name:"Coconut",calory:159},
                 {id:5,name:"Grapes",calory:37}
                ];
   const vegetables=[{id:6,name:"Potato",calory:110},
                 {id:7,name:"Celery",calory:15},
                 {id:8,name:"Carrots",calory:25},
                 {id:9,name:"Corn",calory:63},
                 {id:10,name:"Broccoli",calory:50}
                ];
   return(<>
     {/* <List items={fruits} />  
     <List items={vegetables} category="vegetables"/>
     <Button/> 
     <MyComponent/>
     <Counter/>
     <MyComponent2/>
     <Colorpicker/> */}
     <MyComponent3/>
   </>)
}
export default App;