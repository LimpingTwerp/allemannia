<template>
<div class="justify-center">
    Oktober
    <ul>
<!--       <li v-for="item in items" :key="item.message">
      {{ item.message }}
      </li> -->
        <li class="border-b-2 p-2 border-black w-auto" v-for="event in events" :key=event.day>
            {{ event.day }} &nbsp;{{event.day_name}} &nbsp;&nbsp;  {{event.name}}
        </li>
    </ul>
</div>
</template>

<script>

export default {
  name: "ProgramMonth",
      data() {
        var days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
        var events = [];
        var i;
        for (i = 1; i <= 31; i++){
            var date = new Date(2020, 9, i);
            var day_name = days[date.getDay()];
            var date_str = i.toString();
            if (date_str.length < 2){
                date_str = "0" + date_str;
            }
            date_str = date_str + ".";
            events.push({
                name:"",
                day_name: day_name, 
                day: date_str,
            });
        }
        events[2].name = "Long Event Name yes Really";
        events[22].name = "Short";
        console.log(events)
        return {events:events};
    }
};
</script>
