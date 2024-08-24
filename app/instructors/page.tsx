

const page = () => {
  const instructors=[
    {name:"Daniel Tigistu",age:"28" ,exprience:"8",skill:" 4.5",role:"Bajaji"},
    {name:"Dida Arero",age:"40" ,exprience:"16",skill:" 5",role:"Bus"},
    {name:"Dida Arero",age:"40" ,exprience:"16",skill:" 5",role:"Bus"},
    {name:"Dida Arero",age:"40" ,exprience:"16",skill:" 5",role:"Bus"},
  ]
  return (
    <div>
      <section className="container mx-auto px-2 py-5 flex flex-wrap space-x-4 ">
      {instructors.map(instructor=>
      <div key={instructor.name}  className="bg-slate-200 p-6 rounded-lg shadow-md my-10 ">
           <h2>Name :Instructor {instructor.name}</h2>
           <p>Age:{instructor.age}</p>
           <p> Exprience :{instructor.exprience} Years  as instructor</p>
           <p> Skill:{instructor.skill} start skill</p>
           <h4>Role : {instructor.role} Instructor</h4>
           </div>
)}
      </section>
    </div>
  )
}

export default page