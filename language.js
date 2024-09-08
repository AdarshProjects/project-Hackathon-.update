const translation = {
    eng: {
        setter_1: "Plan your dream home renovation with our easy online survey.",
        setter_2: "Get a personalized quote and expert advice for your home project.",
        setter_3: "Our comprehensive survey guides you through the entire home renovation process, helping you visualize your dream home and providing valuable insights for a successful project.",
        setter_4: "Rennovation",
        setter_5: "House Building",
        setter_6: "Work Place",
        setter_7: "Your Vision,Our Expertise",
        setter_8: "Let's transform your home into the space you've always dreamed of. Our personalized renovation plans and expert craftsmanship will bring your ideas to life.",
        setter_9: "Not sure where to start?",
        setter_10: "Schedule a 99 Rupee Consultation to discuss your project goals and receive customized recommendations.",
        setter_11: "99 Rupees Free Survey",
        setter_12: "Free Survey"
    },
    hin: {
        setter_1: "हमारे आसान ऑनलाइन सर्वेक्षण के साथ अपने सपनों के घर के नवीनीकरण की योजना बनाएं।",
        setter_2: "अपने होम प्रोजेक्ट के लिए वैयक्तिकृत उद्धरण और विशेषज्ञ सलाह प्राप्त करें।",
        setter_3: "हमारा व्यापक सर्वेक्षण संपूर्ण गृह नवीनीकरण प्रक्रिया में आपका मार्गदर्शन करता है, आपको अपने सपनों के घर की कल्पना करने में मदद करता है और एक सफल परियोजना के लिए मूल्यवान अंतर्दृष्टि प्रदान करता है।",
        setter_4: "नवीनीकरण",
        setter_5: "गृह निर्माण",
        setter_6: "कार्यस्थल",
        setter_7: "आपका दृष्टिकोण, हमारी विशेषज्ञता",
        setter_8: "आइए अपने घर को उस स्थान में बदलें जिसका आपने हमेशा सपना देखा है। हमारी व्यक्तिगत नवीकरण योजनाएं और विशेषज्ञ शिल्प कौशल आपके विचारों को जीवन में लाएंगे",
        setter_9: "निश्चित नहीं हूं कि कहां से शुरुआत की जाए?",
        setter_10: "अपने प्रोजेक्ट लक्ष्यों पर चर्चा करने और अनुकूलित अनुशंसाएँ प्राप्त करने के लिए 99 रुपये परामर्श शेड्यूल करें।",
        setter_11: "99 रुपए फ्री सर्वे",
        setter_12: "निःशुल्क सर्वेक्षण"
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById("langauge");
    let Plan_your_dream_line = document.getElementById("Plan_your_dream_line");
    let Get_a_personalized_line = document.getElementById("Get_a_personalized_line");
    let Our_comphrehensive_line = document.getElementById("Our_comphrehensive_line");
    let Rennovation = document.getElementById("Rennovation");
    let House_Building = document.getElementById("House_Building");
    let Work_place = document.getElementById("Work_place");
    let Your_Vision_line = document.getElementById("Your_Vision_line");
    let Let_transform_line = document.getElementById("Let_transform_line");
    let Not_sure = document.getElementById("Not_sure");
    let schedule_99_rupee = document.getElementById("schedule_99_rupee");
    let rupee_99 = document.getElementById("rupee_99");
    let free_survey = document.getElementById("free_survey");

    languageSelector.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        setLanguage(selectedLanguage);
        localStorage.setItem("preferredLanguage", selectedLanguage);
    });

    const setLanguage = (language) => {
        const lang = translation[language.toLowerCase()];
        if (language === "Eng") {
            Plan_your_dream_line.innerHTML = translation.eng.setter_1;
            Get_a_personalized_line.innerHTML = translation.eng.setter_2;
            Our_comphrehensive_line.innerHTML = translation.eng.setter_3;
            Rennovation.innerHTML = translation.eng.setter_4;
            House_Building.innerHTML = translation.eng.setter_5;
            Work_place.innerHTML = translation.eng.setter_6;
            Your_Vision_line.innerHTML = translation.eng.setter_7;
            Let_transform_line.innerHTML = translation.eng.setter_8;
            Not_sure.innerHTML = translation.eng.setter_9;
            schedule_99_rupee.innerHTML = translation.eng.setter_10;
            rupee_99.innerHTML = translation.eng.setter_11;
            free_survey.innerHTML = translation.eng.setter_12;
        } else if (language === "Hin") {
            Plan_your_dream_line.innerHTML = translation.hin.setter_1;
            Get_a_personalized_line.innerHTML = translation.hin.setter_2;
            Our_comphrehensive_line.innerHTML = translation.hin.setter_3;
            Rennovation.innerHTML = translation.hin.setter_4;
            House_Building.innerHTML = translation.hin.setter_5;
            Work_place.innerHTML = translation.hin.setter_6;
            Your_Vision_line.innerHTML = translation.hin.setter_7;
            Let_transform_line.innerHTML = translation.hin.setter_8;
            Not_sure.innerHTML = translation.hin.setter_9;
            schedule_99_rupee.innerHTML = translation.hin.setter_10;
            rupee_99.innerHTML = translation.hin.setter_11;
            free_survey.innerHTML = translation.hin.setter_12;
        }
    };

    // Load preferred language on page load
    const savedLanguage = localStorage.getItem("preferredLanguage") || "eng";
    setLanguage(savedLanguage);
    if (languageSelector) {
        languageSelector.value = savedLanguage;
    }
});
