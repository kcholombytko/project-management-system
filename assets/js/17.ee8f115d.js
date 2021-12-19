(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{646:function(t,v,r){"use strict";r.r(v);var _=r(34),e=Object(_.a)({},(function(){var t=this,v=t.$createElement,r=t._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"проєктування-бази-даних"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#проєктування-бази-даних"}},[t._v("#")]),t._v(" Проєктування бази даних")]),t._v(" "),r("p",[t._v("В рамках проекту розробляється:")]),t._v(" "),r("ul",[r("li",[t._v("ER-модель")])]),t._v(" "),r("img",{attrs:{src:"https://www.plantuml.com/plantuml/svg/VLFBReCm4BplLrWSgqGALmvLScalhLHLwGTiO8lSW1tPMxLHr7-lCIPsS18EICpip3vPMqR3ttq7G8eb7yMRqLzKipY1S8_2dYh1zCl-amdxIcpT6_xEYYtQ_VNmXh3ff79GWqmUCcGFMbcvwnpwIlsEJ6hbdAzRoLghIiWUMtgI7IMQ3qlckkQ0rlveqmGeIiQykIX6lEkExl6RcgLMBxeDGLWpDHjE6dM3vLkwxV5mtzqmVUAj9RY9xdE9jR9LlViIfuW-6xm4N9Yk9Gv517F6Dfg1tsMnMeY7GYoNeYWNPJ6T1FZjE4YK8pc6JMmOweLuYFJNafChJyQo8UaWop6iusQ2uG3WFB9CcxGCQVjveQvt62UMSU5I0rlEkaYLSywNFkCU9zju3ddYCA3G5yIBI_HUDAVk2vEA0TQa6lVp_mC0",alt:"uml diagram"}}),t._v(" "),r("p",[t._v("Пояснення до "),r("strong",[t._v("ER-моделі")]),t._v(":")]),t._v(" "),r("p",[t._v("Entities:")]),t._v(" "),r("ul",[r("li",[t._v("Project - проєкт"),r("br"),t._v("\nАтрибути:"),r("br"),t._v("\nname: text - назва проекту"),r("br"),t._v("\nteam: Team - команда, яка прив'язана до певного проекту"),r("br")]),t._v(" "),r("li",[t._v("Team - команда"),r("br"),t._v("\nАтрибути:"),r("br"),t._v("\nname: text - назва команди"),r("br"),t._v("\nicon: imageFile - іконка команди"),r("br")]),t._v(" "),r("li",[t._v("Member - учасник команди"),r("br"),t._v("\nАтрибути:"),r("br"),t._v("\nname: text - назва учасника"),r("br")]),t._v(" "),r("li",[t._v("Grant - об'єкт який описує право"),r("br")]),t._v(" "),r("li",[t._v("User - користувач"),r("br"),t._v("\nАтрибути:"),r("br"),t._v("\nname: text - назва користувача"),r("br"),t._v("\npassword: text - пароль до користувача"),r("br")]),t._v(" "),r("li",[t._v("Role - роль в команді. Роль складається із набору грантів"),r("br"),t._v("\nАтрибути:"),r("br"),t._v("\nname: text - назва ролі"),r("br")]),t._v(" "),r("li",[t._v("Action - дія"),r("br"),t._v("\nАтрибути:"),r("br"),t._v("\nname: text - назва дії"),r("br"),t._v("\ndate: date - дата дії"),r("br"),t._v("\ntype: text - тип дії"),r("br")]),t._v(" "),r("li",[t._v("State - журнал виконаних дій"),r("br")]),t._v(" "),r("li",[t._v("Task - завдання"),r("br"),t._v("\nАтрибути:"),r("br"),t._v("\nname: text - назва завдання"),r("br"),t._v("\ndeadline: date - дедлайн завдання"),r("br"),t._v("\nresponsible: Member - відповідальний"),r("br"),t._v("учасник за завдання\nstatus: text - статус виконання завдання"),r("br")]),t._v(" "),r("li",[t._v("Artefact - артефакт"),r("br"),t._v("\nАтрибути:"),r("br"),t._v("\nname: text - назва артефакту"),r("br"),t._v("\nlink: text - лінк на артефакт"),r("br")])]),t._v(" "),r("p",[t._v("Головною сутністю є проєкт. До проєкту прив'язана 1 і тільки 1 команда, також у проєкті можна створювати безліч завдань."),r("br"),t._v("\nЗа кожним завданням закріплена невизначена кількість артефактів."),r("br"),t._v("\nКоманда складається з 1 чи більше учасників, при цьому кожен з них є користуачем СУП. У той же час один користувач може бути учасником багатьох команд."),r("br"),t._v("\nГрант це об'єкт, що описує право на якусь дію напрямлену на менеджемент проєкту, завдання чи команди. Кожному завданню можуть відповідати багато грантів, так само як і проєкту, команді, але в моделі не позначені зв'язки гранту з командою та проєктом, так як вони в межах одного проєкту завжди виступають в єдиному екземплярі. Гранти прив'язані до конкретних учасника та дії."),r("br"),t._v("\nРоль може бути присвоєна учаснику, але не напряму, а як набір грантів."),r("br"),t._v("\nДії запусуються у журнал виконаних дій.")])])}),[],!1,null,null,null);v.default=e.exports}}]);