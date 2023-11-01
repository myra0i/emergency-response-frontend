
import React from 'react'

const Menu = () => {
 // const [posts, setPosts] = useState([])

//useEffect(()=> {

//const fetchData = async ()=> {
//try{
//const res = await axios.get(`/posts/?cat=${cat}`)
//setPosts(res.data)


//}catch(err){

  //console.log(err)

//}

//}
//etchData()

  //},[cat])
  return (
    <div className='menu'>
      
    <label for="county">Select County:</label>

    <select name="county" id="county">
  <option value="mombasa">Mombasa</option>
  <option value="kwale">kwale</option>
  <option value="kilifi">kilifi</option>
  <option value="tana river">Tana River</option>
  <option value="taita-taveta">Taita taveta</option>
  <option value="garissa">garissa</option>
  <option value="wajir">wajir</option>
  <option value="mandera">mandera</option>
  <option value="marsabit">marsabit</option>
  <option value="isiolo">isiolo</option>
  <option value="meru">meru</option>
  <option value="tharaka-nithi">tharaka-nithi</option>
  <option value="embu">embu</option>
  <option value="kitui">kitui</option>
  <option value="machakos">machakos</option>
  <option value="makueni">makueni</option>
  <option value="nyandarua">nyandarua</option>
  <option value="nyeri">nyeri</option>
  <option value="kiinyaga">kiinyaga</option>
  <option value="muranga">muranga</option>
  <option value="kiambu">kiambu</option>
  <option value="turkana">turkana</option>
  <option value="westpokot">westpokot</option>
  <option value="samburu">samburu</option>
  <option value="trans-nzoia">Trans nzoia</option>
  <option value="uasin gishu">Uasin gishu</option>
  <option value="marakwet">marakwet</option>
  <option value="nandi">nandi</option>
  <option value="baringo">baringo</option>
  <option value="laikipia">laikipia</option>
  <option value="nakuru">nakuru</option>
  <option value="kajiado">kajiado</option>
  <option value="kericho">kericho</option>
  <option value="bomet">bomet</option>
  <option value="kakamega">kakamega</option>
  <option value="vihiga">vihiga</option>
  <option value="bungoma">bungoma</option>
  <option value="busia">busia</option>
  <option value="siaya">siaya</option>
  <option value="kisumu">kisumu</option>
  <option value="homabay">Homabay</option>
  <option value="migori">Migori</option>
  <option value="kisii">Kisii</option>
  <option value="nyamira">Nyamira</option>
  <option value="nairobi">Nairobi</option>
    </select>

    <div className="img">
        <img src='https://gisgeography.com/wp-content/uploads/2021/07/Kenya-Map-768x864.jpg' alt=''/>
    </div>
    </div>
  )
}

export default Menu
