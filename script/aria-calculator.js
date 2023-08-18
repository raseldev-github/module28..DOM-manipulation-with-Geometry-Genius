function calculateTriangleArea(){
                // get triangle base value
   const baseField = document.getElementById("triangle-base");
     const baseValueText = baseField.value;
       const base = parseFloat(baseValueText);
       
        //  get triangle height value
    const heightField = document.getElementById("tringle-height");
      const heightValueText = heightField.value;
        const height = parseFloat(heightValueText);
        //   console.log(base, height)
        const area = 0.5 * base * height;
          console.log(area)
        // show triangle area
        const triangleArea = document.getElementById("triangle-area");
            triangleArea.innerText = area;
}

function calculateRactangleArea(){
        // get ractangle width
    const reactangleFieldWidth = document.getElementById("ractangle-width");
      const reactangleFieldWidthText = reactangleFieldWidth.value;
        const ractangleWidth = parseFloat(reactangleFieldWidthText);

        //   get ractangle length
     const ractangleFieldHeight = document.getElementById("ractangle-height");
       const ractangleFieldHeightText =ractangleFieldHeight.value;
         const ractangleHeight =  parseFloat(ractangleFieldHeightText);
        //    console.log(ractangleWidth, ractangleHeight)
        //  multiply this fiele Number
     const ractangleAreaTotal = ractangleWidth * ractangleHeight;
          
        // show  ractangle area
        const ractangleArea = document.getElementById("ractangle-area");
              ractangleArea.innerText = ractangleAreaTotal;
}



                // reusable function---reduce duplicate code
    function calculateParallelogramArea(){
          const base = getInputValue("parallelogram-base");
             console.log(base)

             const height = getInputValue("parallelogram-height");
                console.log(height)
            const area = base * height;
               setElementInnText('parallelogram-area', area);
    }

      function calculateEllipseArea(){
          const majorRadius = getInputValue("elipsis-major-radius");
          const minorRadius = getInputValue("elipsis-minor-radius");
           const area = 3.1416 * majorRadius * minorRadius;
            setElementInnText("elipsis-area", area);


           
      }


        // reusable get input field value in number
    function getInputValue(inputId){
        const inputField = document.getElementById(inputId);
          const inputFieldText = inputField.value;
            const value = parseFloat(inputFieldText);
               return value;
    }

            //    set reusable span, p, div etc
    
    function setElementInnText(elementId,area){
        const element = document.getElementById(elementId);
            element.innerText = area;

    }