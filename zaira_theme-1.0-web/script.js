function submitToGoogleForms(happy, scare, place, friend, bully, surname, cool, insult, recre, important, confiance, who, hurt, feel, apart, kind, safe) {

    if(happy === "Oui.") {
        document.getElementById('schoolHappyYes').checked = true;
    } else if(happy === "Non.") {
        document.getElementById('schoolHappyNo').checked = true;
    }


    if(scare === "Oui.") {
        document.getElementById('schoolFearYes').checked = true;
    } else if(scare === "Non.") {
        document.getElementById('schoolFearNo').checked = true;
    }


    if(place === "La cantine") {
        document.getElementById('favPartCafeteria').checked = true;
    } else if(place === "La classe") {
        document.getElementById('favPartClass').checked = true;
    } else if(place === "La récréation") {
        document.getElementById('favPartRecess').checked = true;
    } else if(place === "Le retour à la maison") {
        document.getElementById('favPartEnd').checked = true;
    }
    
    if(friend === "Oui.") {
        document.getElementById('haveFriendsYes').checked = true;
    } else if(friend === "Non.") {
        document.getElementById('haveFriendsNo').checked = true;
    }

    if(bully === "Oui.") {
        document.getElementById('bulliedYes').checked = true;
    } else if(bully === "Non") {
        document.getElementById('bulliedNo').checked = true;
    }

    if(surname === "Oui") {
        document.getElementById('meanNicknameYes').checked = true;
    } else if(surname === "Non") {
        document.getElementById('meanNicknameNo').checked = true;
    }


    if(cool === "Oui") {
        document.getElementById('getAlongYes').checked = true;
    } else if(cool === "Non") {
        document.getElementById('getAlongNo').checked = true;
    }

    if(insult === "Oui") {
        document.getElementById('mockedYes').checked = true;
    } else if(insult === "Non") {
        document.getElementById('mockedNo').checked = true;
    }

    if(recre === "Oui") {
        document.getElementById('fearRecessYes').checked = true;
    } else if(recre === "Non") {
        document.getElementById('fearRecessNo').checked = true;
    }

    if(important === "Oui") {
        document.getElementById('talkImportantYes').checked = true;
    } else if(important === "Non") {
        document.getElementById('talkImportantNo').checked = true;
    }

    if(confiance === "Oui") {
        document.getElementById('trustAdultsYes').checked = true;
    } else if(confiance === "Non") {
        document.getElementById('trustAdultsNo').checked = true;
    }

    if(who === "Mes parents") {
        document.getElementById('tellParents').checked = true;
    } else if(who === "Les adultes de lécole") {
        document.getElementById('tellSchoolAdults').checked = true;
    } else if(who === "Les autres enfants") {
        document.getElementById('tellOtherKids').checked = true;
    } else if(who === "Personne") {
        document.getElementById('tellNoOne').checked = true;
    }

    if(hurt === "Jamais") {
        document.getElementById('harmedNever').checked = true;
    } else if(hurt === "Parfois") {
        document.getElementById('harmedSometimes').checked = true;
    } else if(hurt === "Souvent") {
        document.getElementById('harmedOften').checked = true;
    } else if(hurt === "Tout le temps") {
        document.getElementById('harmedAlways').checked = true;
    }

    if(feel === "Mal") {
        document.getElementById('feelBad').checked = true;
    } else if(feel === "Bien") {
        document.getElementById('feelGood').checked = true;
    }

    if(apart === "Oui.") {
        document.getElementById('feelLeftOutYes').checked = true;
    } else if(apart === "Non.") {
        document.getElementById('feelLeftOutNo').checked = true;
    } else if(apart === "Neutre.") {
        document.getElementById('feelLeftOutNeutral').checked = true;
    }

    if(kind === "Oui") {
        document.getElementById('kindnessImportantYes').checked = true;
    } else if(kind === "Non") {
        document.getElementById('kindnessImportantNo').checked = true;
    }

    if(safe === "Oui") {
        document.getElementById('feelSafeYes').checked = true;
    } else if(safe === "Non") {
        document.getElementById('feelSafeNo').checked = true;
    }

    document.getElementById('hiddenForm').submit();


}