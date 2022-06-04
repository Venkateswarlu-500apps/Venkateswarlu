import Vue from 'vue'
import Router from 'vue-router'
import Helloworld from '../components/HelloWorld'
import Btable from '../components/13-04-2022/Btable.vue'
import Que from '../components/13-04-2022/1stV-for.vue'
import Que2 from '../components/14-04-2022/2ndV-for.vue'
import Que3 from '../components/14-04-2022/3rdbcard.vue'
import form from '../components/14-04-2022/formvalidation.vue'
//import ice from '../components/14-04-2022/icecream.vue'
//import arr from '../components/14-04-2022/array.vue'
//import emit from '../components/emitchild.vue'
import Props from '../components/18-04-2022/ParentProp.vue'
import Data from '../components/27-04-2022/getdata.vue'
import Data1 from '../components/19-04-2022/getdata1.vue'
import axios from '../components/19-04-2022/axios.vue'
import bform from '../components/20-04-2022 Assignment/Question9.vue'
import btable from '../components/20-04-2022 Assignment/Question8.vue'
import input from '../components/20-04-2022 Assignment/Question1.vue'
import count from '../components/20-04-2022 Assignment/Question10.vue'
import set from '../components/20-04-2022 Assignment/Question3.vue'
import Q from '../components/22-04-2022/Q1.vue'
import Self from '../components/21-04-2022/Question5.vue'
import Odd from '../components/21-04-2022/Question7.vue'
import Q2 from '../components/21-04-2022/Question2.vue'
import Q4 from '../components/21-04-2022/Question4.vue'
import parent from '../components/21-04-2022/parent.vue'
import For from '../components/21-04-2022/foreach'
import all from '../components/21-04-2022/All.vue'
import filter from '../components/21-04-2022/filter.vue'
import map from '../components/21-04-2022/map.vue'
import find from '../components/22-04-2022/find.vue'
import Q1 from '../components/22-04-2022/Q1.vue'
import pro from '../components/22-04-2022/promises.vue'
import ap from '../components/22-04-2022/ap.vue'
import a from '../components/22-04-2022/a.vue'
import A1 from '../components/25-04-2022(Assignment)/Question1'
import A2 from '../components/25-04-2022(Assignment)/Question2'
import A4 from '../components/25-04-2022(Assignment)/Question4P'
import A5 from '../components/25-04-2022(Assignment)/Question5P'
import A6 from '../components/25-04-2022(Assignment)/Question6'
import A7 from '../components/25-04-2022(Assignment)/Question7'
import A8 from '../components/25-04-2022(Assignment)/Question8'
import A9 from '../components/25-04-2022(Assignment)/Question9'
import A10 from '../components/25-04-2022(Assignment)/Question10'
import b1 from '../components/26-04-2022(Assignment)/Question1'
import b2 from '../components/26-04-2022(Assignment)/Question2'
import b3 from '../components/26-04-2022(Assignment)/Question3'
import b4 from '../components/26-04-2022(Assignment)/Question4'
import b5 from '../components/26-04-2022(Assignment)/Question5'
import b6 from '../components/26-04-2022(Assignment)/Question6'
import task from '../components/27-04-2022/task'
import b7 from '../components/27-04-2022/Question7'
import c1 from '../components/28-04-2022(Assignment)/Question1'
import c2 from '../components/28-04-2022(Assignment)/Question2'
import c3 from '../components/29-04-2022/Question3'
import s from '../components/29-04-2022/sample'
import i from '../components/28-04-2022(Assignment)/i'
import QQ3 from '../components/02-05-2022/Question3'
import QQ5 from '../components/02-05-2022/Question5'
import QQ6 from '../components/03-05-2022/Question6'
import QQ7 from '../components/03-05-2022/Question7'
import QQ8 from '../components/03-05-2022/Question8'
import QQ9 from '../components/03-05-2022/Question9'
import QQ10 from '../components/03-05-2022/Question10'
import crud from '../components/04-05-2022/CRUD'
import c from '../components/03-05-2022/c'
import com from '../components/05-05-2022/computed'
import com1 from '../components/05-05-2022/computed1'
import co from '../components/05-05-2022/computed0'
import scroll from '../components/05-05-2022/scrollspy'
import watch from '../components/06-05-2022/watch'
import btab from '../components/06-05-2022/btabs'
import btab1 from '../components/task(09-05-2022)/btab1'
import pt from '../components/task(09-05-2022)/pagetable'
import ptt from '../components/task(09-05-2022)/ptt'
import sap from '../components/task(09-05-2022)/sap'
import tab from '../components/task(09-05-2022)/btabs2'
import bt from '../components/Assignment(10-05-2022)/Question1'
import w from '../components/Assignment(10-05-2022)/Question2'
import cs from '../components/Assignment(10-05-2022)/Question4js'
import sc from '../components/Assignment(10-05-2022)/Question1js'
import  tt from '../components/avatar'
import nt from '../components/nexttick'
import fi from '../components/12-05-2022/if'
import dd from '../components/12-05-2022/dropdown'
import bu1 from '../components/13-05-2022/eventBusP'
import f1 from '../components/StudentForm'
import fe from '../components/18-05-2022/ForEach'
import fii from '../components/18-05-2022/Filter'
import SignUp from '../components/NOTE/SignUp'
import Home from '../components/NOTE/Home'
import Login from '../components/NOTE/Login'
//import SideBar from '../components/NOTE/SideBar'
import cop from '../components/NOTE/cop'
//import sd from '../components/NOTE/SavedData'
import bu from '../components/25-05-2022/busp'
import Parent from '../components/25-05-2022/Parent'
import Ft from '../components/26-05-2022/Form'
import Tf from '../components/26-05-2022/Table'
import Home1 from '../components/CRUD/Home'
import Home2 from '../components/Table/Home'
import SideBar from '../components/Table/SideBar'
import Form from '../components/Table/Form'
import imp from '../components/Table/imp'

Vue.use(Router)
const routes = [
    { path: '/about', name: "About", component: Helloworld },
    { path: '/table', name: "table", component: Btable, },
    { path: '/form', name: 'form', component: form, },
    { path: '/Que', name: 'Que', component: Que, },
    { path: '/Que2', name: 'Que2', component: Que2, },
    { path: '/Que3', name: 'Que3', component: Que3, },
    // // {
    // //     path: '/ice',
    // //     name: 'ice',
    // //     component:ice,
    // // },
    // // {
    // //     path: '/arr',
    // //     name: 'arr',
    // //     component:arr,
    // // },
    // // {
    // //     path: '/emit',
    // //     name: 'emit',
    // //     component:emit,
    // // },
    { path: '/Props', name: "Props", component: Props, },
    { path: '/Data', name: "Data", component: Data, },
    { path: '/Data1', name: "Data1", component: Data1, },
    { path: '/axios', name: "axios", component: axios, },
    { path: '/bform', name: "bform", component: bform },
    { path: '/btable', name: "btable", component: btable },
    { path: '/input', name: "input", component: input },
    { path: '/count', name: "count", component: count },
    { path: '/set', name: "set", component: set },
    { path: '/Q', name: "Q", component: Q },
    { path: '/Self', name: "Self", component: Self },
    { path: '/Odd', name: "Odd", component: Odd },
    { path: '/Q2', name: "Q2", component: Q2 },
    { path: '/Q4', name: "Q4", component: Q4 },
    { path: '/parent', name: "parent", component: parent },
    { path: '/For', name: "For", component: For },
    { path: '/all', name: "all", component: all },
    { path: '/filter', name: "filter", component: filter },
    { path: '/map', name: "map", component: map },
    { path: '/find', name: "find", component: find },
    { path: '/Q1', name: "Q1", component: Q1 },
    { path: '/pro', name: "pro", component: pro },
    { path: '/ap', name: "ap", component: ap },
    { path: '/a', name: "a", component: a },
    { path: '/A1', name: "A1", component: A1 },
    { path: '/A2', name: "A2", component: A2 },
    { path: '/A4', name: "A4", component: A4 },
    { path: '/A5', name: "A5", component: A5 },
    { path: '/A6', name: "A6", component: A6 },
    { path: '/A7', name: "A7", component: A7 },
    { path: '/A8', name: "A8", component: A8 },
    { path: '/A9', name: "A9", component: A9 },
    { path: '/A10', name: "A10", component: A10 },
    { path: '/b1', name: "b1", component: b1 },
    { path: '/b2', name: "b2", component: b2 },
    { path: '/b3', name: "b3", component: b3 },
    { path: '/b4', name: "b4", component: b4 },
    { path: '/b5', name: "b5", component: b5 },
    { path: '/b6', name: "b6", component: b6 },
    { path: '/task', name: "task", component: task },
    { path: '/b7', name: "b7", component: b7 },
    { path: '/c1', name: "c1", component: c1 },
    { path: '/c2', name: "c2", component: c2 },
    { path: '/c3', name: "c3", component: c3 },
    { path: '/s', name: "s", component: s },
    { path: '/i', name: "i", component: i },
    //{path:'/QQ9',name:"QQ9",component:QQ9},
    { path: '/QQ3', name: "QQ3", component: QQ3 },
    { path: '/QQ5', name: "QQ5", component: QQ5 },
    { path: '/QQ6', name: "QQ6", component: QQ6 },
    { path: '/QQ7', name: "QQ7", component: QQ7 },
    { path: '/QQ8', name: "QQ8", component: QQ8 },
    { path: '/QQ9', name: "QQ9", component: QQ9 },
    { path: '/QQ10', name: "QQ10", component: QQ10 },
    { path: '/crud', name: "crud", component: crud },
    { path: '/c', name: "c", component: c },
    { path: '/com', name: "com", component: com },
    { path: '/com1', name: "com1", component: com1 },
    { path: '/co', name: "co", component: co },
    { path: '/scroll', name: "scroll", component: scroll },
    { path: '/watch', name: "watch", component: watch },
    { path: '/btab', name: "btab", component: btab },
    { path: '/btab1', name: "btab1", component: btab1 },
    { path: '/pt', name: "pt", component: pt },
    { path: '/ptt', name: "ptt", component: ptt },
    { path: '/sap', name: "sap", component: sap },
    { path: '/tab', name: "tab", component: tab },
    { path: '/bt', name: "bt", component: bt },
    { path: '/w', name: "w", component: w },
    { path: '/cs', name: "cs", component: cs },
    { path: '/sc', name:"sc", component: sc},
    { path: '/tt', name:"tt", component: tt},
    { path: '/nt', name:"nt", component: nt},
    { path: '/fi', name:"fi", component: fi},
    { path: '/dd', name:"dd", component: dd},
    { path: '/bus', name:"bus", component: bu},
    { path: '/bus1', name:"bus1", component: bu1},
    { path: '/f1', name:"f1", component: f1},
    { path: '/fe', name:"fe", component: fe},
    { path: '/fii', name:"fii", component: fii},
    { path: '/SignUp', name:"SignUp", component: SignUp},
    { path: '/Home', name:"Home", component: Home},
    // { path: '/SideBar', name:"SideBar", component: SideBar}
    { path: '/Login', name:"Login", component: Login},
    { path: '/cop', name:"cop", component: cop},
    //{ path: '/sd', name:"sd", component: sd}
    { path: '/Parentall', name:"Parent", component: Parent},
    { path: '/TableForm', name:"FT", component: Ft},
    { path: '/TableForm1', name:"TF", component: Tf},
    { path: '/Home1', name:"Home1", component: Home1},
    { path: '/SideBar', name:"SideBar", component: SideBar},
    { path: '/Product', name:"Product", component: Form},
    { path: '/imp', name:"imp", component: imp},
    { path: '/ProductHome', name:"Home2", component: Home2}

]
let router = new Router({ routes })
export default router