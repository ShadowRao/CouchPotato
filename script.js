function All_intro()
{
    var loc =window.location.href;

    if(loc[12]=="n") //Netflix
    { 
        // function netflix_next_ep()
        // {
        // try
        // {
        //     var Netflixnextep =document.getElementsByClassName("nfa-pos-abs nfa-bot-6-em nfa-right-5-em nfa-d-flex")[0];//netflix nextep 
        //     Netflixnextep.click();
        // }
        // catch (e){}
        // }
 
        function netflix_intro()
        {
            try
            {
    
                var Netflixintro =document.getElementsByClassName("ltr-10qgxi")[0];//netflix intro
                Netflixintro.click();
            }
            catch (e){}
        }
 
    // netflix_next_ep();
         
    netflix_intro();//         
 
    }
 
 
    else if(loc[12]=="p")//prime video
    {
        // function prime_ad()
        // {
        // var primead = document.getElementsByClassName("fu4rd6c f1cw2swo")[0];
         
        // primead.click();
        // }
 
        // function prime_next_ep()
        // {
        // try
        // {
        //     var primenextep =document.getElementsByClassName("nfa-pos-abs nfa-bot-6-em nfa-right-5-em nfa-d-flex")[0];
        //     primenextep.click();
        // }
        // catch (e){}
        // }
 
        function prime_intro()
        {
            try
            {
                var primeintro =document.getElementsByClassName("fqye4e3 fovm8oe fez7z67 fektfsf fif0hcs f177tia9 fww9brl f1nxf0rp f1ylp05h atvwebplayersdk-skipelement-button f1cg7427 f989gul f1rjin6j f19qnh9o")[0];//netflix intro
                primeintro.click();
                return;
            }
            catch (e){}
        }

        //prime_ad();
        prime_intro();
        //prime_next_ep();
 
        
         
        //
    }
 
    else if(loc[12]=="h")//hotstar
    {   
        function hotstar_intro()
        {
            try
            {
                var  intro_hidd = document.getElementsByClassName("binge-btn-wrapper show-btn");
            
                if (intro_hidd.length!=0)
                {
                    var Hotstarintro =document.getElementsByClassName("binge-btn primary medium")[0];
                    Hotstarintro.click();
                } 
 
            }
            catch (e){}
        }
 
        function hotstar_skip_recap()
        {
            try
            {
                var  next_ep_hidd = document.getElementsByClassName("binge-btn-wrapper show-btn");
            
                if (next_ep_hidd.length!=0)
                {
                    var Hotstar_next_ep =document.getElementsByClassName("btn-icon")[0];
                    Hotstar_next_ep.click();
                } 
     
            }
            catch (e){}
        }
         
        hotstar_intro();
        hotstar_skip_recap();
 
 
    }

    
    
 
}

const introskip =setInterval(All_intro,500);



 

 

 