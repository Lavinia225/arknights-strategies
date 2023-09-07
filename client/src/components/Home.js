function Home(){
    return(
        <div id='home'>
            <h2>Welcome to the Arknights Strategies Forum!</h2>
            <div id='home-grid'>
                <div className='home-column'>
                <h3>What is this?</h3>
                    <li>Arknights Strategies is a forum for sharing strategies used to 
                    complete particular stages in the mobile tower defense game, Arknights. </li>
                </div>
                <div className='home-column'>
                    <h3>Rules and Guidelines</h3>
                    <ul id='guidelines'>
                        <li>Use basic online etiquette.</li>
                        <li>After creating a post, tag it with the operators you used.</li>
                        <li>When it comes to operator levels, write their promotion level then level like so: "E0-45"</li>
                        <li>Time stamps are in UTC</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home