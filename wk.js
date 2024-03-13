export default class WorkoutTracker{

    static LOCAL_STORAGE_DATA_KEY = "workout-tracker-entries"
    constructor(root){
        this.root = root;
        this.root.insertAdjacentHTML("afterbegin", WorkoutTracker.html())
        this.entries = []
        this.loadEntries();
        this.updateView();

        this.root.querySelector(".tracker__add").addEventListener("click", () =>{
            const date = new Date()
            const year = date.getFullYear()
            const month = (date.getMonth() + 1).toString().padStart(2, "0")
            const day = (date.getDay() + 1).toString().padStart(2, "0")
            this.addEntry({
                date : `${ year }-${ month }-${ day }`,
                workout: "walking",
                duration: 30
            })
        })
    }

    static html() {
        return `
            <table class="tracker">
                <thead>
                    <tr>
                        <th>
                            Data
                        </th>
                        <th>
                            Workout
                        </th>
                        <th>
                            Duration
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody class="tracker__entries"></tbody>
                <tbody>
                    <tr class="tracker__row tracker__row--add">
                        <td colspan="4">
                            <span class="tracker__add">Add Entry &plus;</span>
                        </td>
                    </tr>
                </tbody>
            </table>`;
    }
    static rowHtml() {
        return `
            <tr class="tracker__row">
                <td>
                    <input type="date" class="tracker__date">
                </td>
                <td>
                    <select class="tracker__workout">
                        <option value="walking">Walking</option>
                        <option value="jogging">jogging</option>
                        <option value="running">Running</option>
                        <option value="swimming">Swimming</option>
                        <option value="cycling">Cycling</option>
                    </select>
                </td>
                <td>
                    <input type="number" class="tracker__duration">
                    <span class="tracker__text">minutes</span>
                </td>
                <td>
                    <button type="button" class="tracker__delete">&times;</button>
                </td>
            </tr>
    `;
    }
    loadEntries(){
        this.entries = JSON.parse(localStorage.getItem("workout-tracker-entries") || "[]");
    }

    saveEntries(){
        localStorage.setItem("workout-tracker-entries", JSON.stringify(this.entries))
    }

    updateView(){
        const tableBody = this.root.querySelector(".tracker__entries")
        const addRow = data => {
            console.log(data)
            const template = document.createElement("template")
            let row = null
            template.innerHTML = WorkoutTracker.rowHtml().trim()
            row = template.content.firstElementChild

            row.querySelector(".tracker__date").value = data.date
            row.querySelector(".tracker__workout").value = data.workout
            row.querySelector(".tracker__duration").value = data.duration

            row.querySelector(".tracker__date").addEventListener("change", ({target}) => {
                data.date = target.value
                this.saveEntries()
            })

    
            row.querySelector(".tracker__workout").addEventListener("change", ({target}) => {
                data.workout = target.value
                this.saveEntries()
            })

            row.querySelector(".tracker__duration").addEventListener("change", ({target}) => {
                data.duration = target.value
                this.saveEntries()
            })

            row.querySelector(".tracker__delete").addEventListener("click", () => {
                this.deleteEntry(data)
            })

            tableBody.appendChild(row)
        };
        tableBody.querySelectorAll(".tracker__row").forEach(row => {
            row.remove()
        });
        this.entries.forEach(data => addRow(data))
    }

    addEntry(data){
        this.entries.push(data)
        this.saveEntries()
        this.updateView()
    }
    deleteEntry(dataToDelete){
        this.entries = this.entries.filter(data => data != dataToDelete)
        this.saveEntries()
        this.updateView()
    }
}