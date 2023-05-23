const button=document.querySelector("#btn")
const inputText=document.querySelector("#input-text")
const result=document.querySelector("#result")

// Add event listener to the button
button.addEventListener("click", ()=>{
//   get the input text value and trim any whitespaces
  const text= inputText.value.trim();
  
  // check if the input is empty
  if(text.length==0){
    alert("Input cannot be empty");
    return;
  }
  console.log("jiii")
  // Non-alphanumaric
  const cleanText=text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  const isPalindrome=cleanText===cleanText.split("").reverse("").join("");
  
  // create a message
  const message=isPalindrome ?`<span> Yes</span> It's a Palindrome!`:
  `<span> Nope</span> It's not a Palindrome!`
  
  result.innerHTML=message;
  result.classList.remove("error","success");
  setTimeout(()=>{
    result.classList.add(isPalindrome ? 'success':'error')
  },10)
});