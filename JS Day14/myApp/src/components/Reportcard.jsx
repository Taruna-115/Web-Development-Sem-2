import React from "react"
import data from "../data"
import { useState } from "react"
import '../App.css'

const Reportcard = () => {
    const[studentData, setStudentData] = useState(data)

    console.log(data)
    let studentObj = {
        name:'',
        marks:''
    }

    function submitHandler(event){
        event.preventDefault()
        
        studentObj.name = event.target.name.value
        studentObj.marks = event.target.marks.value

        console.log(studentObj)

        // data.push(studentData)
        setStudentData((preData)=>{
            return[...preData, studentObj]
        })
    }


    let TotalStudents = studentData.length
    

    return(
        <div>
            <h1>Report Card</h1>

            <p>Total Students : {TotalStudents}</p>
            <p>Passed Students: {}</p>
            <p>Failed Students: {}</p>
            <p>Avg Marks: {}</p>

            {/* Method to print data using indexing:- */}
            {/* <p>Name : {data[0].name}</p>
            <p>Marks : {data[0].marks}</p><hr/>
            <p>Name : {data[1].name}</p>
            <p>Marks : {data[1].marks}</p><hr/>
            <p>Name : {data[2].name}</p>
            <p>Marks : {data[2].marks}</p><hr/>
            <p>Name : {data[3].name}</p>
            <p>Marks : {data[3].marks}</p><hr/> */}


            {/* One more method to print this data(Without using index) */}
            {/* {
                data.map((item)=>{
                    return <div>
                        <p>Name : {item.name}</p>
                        <p>Marks : {item.marks}</p><hr/>
                    </div>
                })
            } */}

            <form onSubmit = {submitHandler}>
                <input placeholder="name" name="name"/>
                <input placeholder="marks" name="marks"/>
                <button type="submit">Add</button>
            </form>

            {
                studentData.map((item, index)=>{
                    return <div id="reportcard" key={index}>
                        <p>Name : {item.name}</p>
                        <p>Marks : {item.marks}</p>
                    </div>
                })
            }

        </div>
    )
}

export default Reportcard