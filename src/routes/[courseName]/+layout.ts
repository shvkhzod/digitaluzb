    
    
    export async function load({ params }) {
        const { courseName } = params;
        console.log(courseName);
        return { courseName };
     
  }