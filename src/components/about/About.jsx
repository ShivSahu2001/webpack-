import Mountain from "images/mountain.avif"

const About = () => {
    return(
        <div>
            <h2>About Component</h2>
            <img src={Mountain} alt="Car" className="img" />
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse hic veritatis voluptatibus necessitatibus expedita molestiae. Aut doloribus quisquam voluptates sint cupiditate reiciendis quaerat assumenda quas consequuntur, id quod ea molestias quae error quasi magnam repellendus, inventore illum possimus, nobis tempora?
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aliquam maiores ducimus eveniet. Libero quos dolores corporis quia reiciendis modi repellendus odio sapiente, quaerat, commodi, autem itaque magni placeat ut?
            </p>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos voluptates incidunt numquam. Voluptatibus molestiae ipsum dolorum nihil! Voluptates dolor non ab ipsam obcaecati nihil corporis in praesentium optio a?
            </p>
        </div>
    )
};

export default About;