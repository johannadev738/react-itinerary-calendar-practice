
import Event from './Event'

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tueday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>



                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event= 'Fancy Dinner' location ='Maple & Ash' color='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                     <tr>
                        <td className="time">9 am</td>
                        <Event event = 'Starbucks' location= '646 Michigan Ave' color='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                    <td className="time">10 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Subway 🚊' location='uptown the left' color ='pink'/>
                    <td></td>
                    <td></td>
                    <Event event='The Bean 🫘' color ='blue'/>
                    </tr>

                     <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    <Event event='Art Mueseum' location='Shuttle Sphere' color ='pink'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                     <tr>
                        <td className="time">12 am</td>
                        <td></td>
                        <td></td>
                    <Event event='Meeting' location='North York' color ='blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                     <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    <Event event='Flowers' location='The Valley' color ='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                     <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    <Event event='Mail Gifts' location='Fedex' color ='blue'/>
                    </tr>

                     <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                     <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>

                     <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>


            </table>
        </div>

    );


}

export default Calendar;