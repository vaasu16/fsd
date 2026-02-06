export default function Registration(){
    const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh
    alert("Form Submitted Successfully!");
  };
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Name </label>
            <input type="text" placeholder="enter your name"></input>
            <label>Age</label>
            <input type="number" placeholder="enter your age"></input>
            <label>Mobile number</label>
            <input type="number" placeholder="enter your Number"></input>
            <label>email id</label>
            <input type="email" placeholder="enter your email id"></input>
            <button type="submit">Register</button>
        </form>

        </>
    )
}