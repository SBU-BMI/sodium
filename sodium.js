console.log('sodium.js loaded')

// just an idea, ask me more about sbmApps.render(h)

//false||(function(){ // this little trick will have all variables stay local
    var h = ''
    h += '<h3 style="color:maroon">Clinical trial</h3>'
    h += '<p style="color:maroon">Dieatery Sodium Intake and Outcomes in Heart Failure</p>'
    h += '<hr>'
    h += '<span id="sodiumMsg"></span>'
    h += '<h4 style="color:navy" id="sodiumConsent">Research Consent Form: <button id="sodiumConsentStart" class="btn btn-primary">Start</button><h4>'
    h += '<h4 style="color:navy" id="sodiumMeteor">Research Consent Form: <button id="sodiumMeteorStart" class="btn btn-success">Meteor</button><h4>'
    h += '<h4 style="color:navy">...<h4>'
    
    sbmApps.render(h)
    var msg = function(txt,clr){
        if(!clr){clr="blue"} // default color is blue
        sodiumMsg.textContent=' > '+txt
        sodiumMsg.style.color=clr
        setTimeout(function(){
            sodiumMsg.textContent=''
        },3000)
    }
    sodiumConsentStart.onclick=function(){
        msg(' Consent Form under development by Joe Balsamo ...','red')
    }
    sodiumMeteorStart.onclick=function(){
        document.location.href="https://studyapp.meteor.com/"
    }



//})()
