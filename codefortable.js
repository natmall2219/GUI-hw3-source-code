var output = '';
var BlankFieldError = '';
var ValueConflictError = '';
var scndValueConflictError = '';
/* initializing variables above that are not initialized otherwise before the function call */
function ReadInFourNumbers(){
    
    var MinColumnValue = +document.getElementById('MinColumnValue').value;
    var MaxColumnValue = +document.getElementById('MaxColumnValue').value;
    var MinRowValue = +document.getElementById('MinRowValue').value;
    var MaxRowValue = +document.getElementById('MaxRowValue').value; 


/*checking for incorrect user input */ 
if (MinColumnValue == ' ' || MaxColumnValue == ' ' ||  MinRowValue == ' ' || MaxRowValue == ' ') 
{
    BlankFieldError = "it appears you are missing a value. please make sure you enter a value for every row/column.";
    document.getElementById('DisplayError').innerHTML = BlankFieldError; 
    return false; 
}
if(MinColumnValue > MaxColumnValue)
{
    ValueConflictError = "the min column value can't be higher than the max column value. enter valid values.";
    document.getElementById('DisplayError').innerHTML = ValueConflictError; 
    return false;
}
if(MinRowValue > MaxRowValue)
{
    scndValueConflictError = "the min row value can't be higher than the max row value. enter valid values.";
    document.getElementById('DisplayError').innerHTML = scndValueConflictError; 
    return false; 
}


/* do this stuff should user input be correct/valid */
   if(!(MinColumnValue == ' ' || MaxColumnValue == ' ' ||  MinRowValue == ' ' || MaxRowValue == ' '))
   {

/* empty space */
output += '<td>' + ' ' + '</td>';

/*creates the first row of the table.*/
for(var i =  MinRowValue; i <= MaxRowValue; i++)
{
    output += '<td>' + i + '</td>';
}

output += '</tr>'; /* adds a table row and assigns the current output as this row. */

/* creates the first column of the table. */
for(var i = MinColumnValue; i <= MaxColumnValue; i++)
{
    output += '<tr>'; /* adds a table row and assigns the current row as this row. */
    output += '<td>' + i + '</td>';
    /* creates results that will be produced in the table. */
    for(var j = MinRowValue; j <= MaxRowValue; j++)
    {
        output += '<td>' + i * j + '</td>';
    }
    output += '</tr>'; /* adds a table row and assigns the current output as this row. */
}
  document.getElementById('MultiplicationTable').innerHTML = output; 

}

}

