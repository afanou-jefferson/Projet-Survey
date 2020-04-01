var nbCheck = 0;
             
function isChecked(elmt)
{
    if( elmt.checked )
    {
        return true;
    }
    else
    {
        return false;
    }
}
 
function clickCheck(elmt)
{
    if( (nbCheck < 6) || (isChecked(elmt) == false) )
    {
        if( isChecked(elmt) == true )
        {
            nbCheck += 1;
        }
        else
        {
            nbCheck -= 1;
        }
    }
    else 
    {
        elmt.checked = false;
    }
}