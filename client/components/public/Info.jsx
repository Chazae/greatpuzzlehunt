import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';
import { Accordion, List, Icon, Header, Segment, Button, Image } from 'stardust';

Info = class Info extends Component {

  componentDidMount() {
    $('html, body').scrollTop(0);
  }

  render() {
    return (
      <div className="ui container">
        <PuzzlePageTitle title="Information"/>

        <Segment basic>
          <h3>Useful downloads</h3>
          <Button color="blue" animated="fade" as="a" href="/pdfs/The Great Puzzle Hunt Rules of Play and Tips.pdf" target="_blank">
            <Button.Content visible>Rules of Play and Tips</Button.Content>
            <Button.Content hidden>
              <Icon name='download' />
              Download
            </Button.Content>
          </Button>
          <Button color="blue" animated="fade" as="a" href="/pdfs/puzzle-hunt-map.pdf" target="_blank">
            <Button.Content visible>Puzzle Campus Map</Button.Content>
            <Button.Content hidden>
              <Icon name='download' />
              Download
            </Button.Content>
          </Button>
        </Segment>

        <Accordion styled fluid>

          <Accordion.Title>
            <Icon color="red" size="huge" name="dropdown"/>
            What is the Great Puzzle Hunt?
          </Accordion.Title>
          <Accordion.Content>
            A puzzle hunt is like a scavenger hunt, with puzzles.
            Teams (size 4-6) travel on foot about campus (outdoors) solving a
            collection of puzzles (logic puzzles, word scrambles, trivia, etc.).
            Lots of prizes will be awarded. Whether your team places first or two
            hundred and fifty-first, competing in a puzzle hunt is a great way to
            stretch your mental muscles, bond with your teammates, and have a lot of fun!
          </Accordion.Content>

          <Accordion.Title>
            <Icon color="orange" size="big" name="dropdown"/>
            When is it?
          </Accordion.Title>
          <Accordion.Content>
            <h4>
              April 1, 2017 (Saturday) at 10:00 AM, Red Square, WWU
            </h4>
            Other important dates:
            <List className='bulleted'>
              <List.Item>Now: <a target="_blank" href="https://actionsprout.io/7E111B">Pre-Register and get notified when registration opens!</a></List.Item>
              <List.Item>March 10, 2017: Early Bird registration closes.</List.Item>
              <List.Item>March 23, 2017: T-Shirt Pre-Order deadline (in order to pick up your shirt at check-in on April 1, 2017)</List.Item>
              <List.Item>March 30, 2017: Registration Closes (Or earlier if team limit is reached).</List.Item>
            </List>
          </Accordion.Content>

          <Accordion.Title>
            <Icon color="yellow" size="big" name="dropdown"/>
            Who is it for?
          </Accordion.Title>
          <Accordion.Content>
            Students, Faculty, Staff, Alumni, Community, Everyone!<br/>
            <small>* Children under 14 must be accompanied at all times by a parent/legal guardian who must also be registered on the same team as the child.</small>
          </Accordion.Content>

          <Accordion.Title>
            <Icon color="olive" size="big" name="dropdown"/>
            What team divisions are there?
          </Accordion.Title>
          <Accordion.Content>
            <List className='bulleted'>
              <List.Item description="WWU Students - All team members must be currently enrolled at WWU (undergrad or grad)"/>
              <List.Item description="High School - All team members must be currently enrolled in high school"/>
              <List.Item description="WWU Alumni - 4 or more team members must be WWU Alumni"/>
              <List.Item description="Non-WWU Post-Secondary - All team members must be currently enrolled in a Post-Secondary institution"/>
              <List.Item description="Open - General Public, Mixed Student/Non-Student, Family (children under age 14 must be accompanied by parent/legal guardian)"/>
            </List>
            Note: A team must have a minimum of 4 members and a maximum of 6.<br/>
            Note: A minimum of 15 teams are required to form a division; else the teams in that division will merge into the Open division.<br/>
            Note: A WWU student may join an Open team, but not the reverse; else the WWU student team will become an Open division team<br/>
          </Accordion.Content>

          <Accordion.Title>
            <Icon color="green" name="dropdown"/>
            How much does this cost?
          </Accordion.Title>
          <Accordion.Content>
            Registration Prices are per person.  All fees are non-refundable.  Fee is charged when person registers.<br/><br/>
            <strong>Early Bird Registration Fee</strong><br/>
            Open until March 10, 2017 <br/>
            Student: $5<br/>
            Non-Student: $10<br/><br/>
            <strong>Regular Registration Fee</strong><br/>
            Open from March 11 - March 30, 2017 <br/>
            Student: $8<br/>
            Non-Student: $15<br/>
            Fees help cover costs of materials, prizes, food, campus services & reservations, etc.  We are seeking <a target="_blank" href="https://securelb.imodules.com/s/1710/campaign/index-noshare.aspx?sid=1710&gid=2&pgid=467&cid=1175&dids=167&bledit=1">donations</a> to help keep fees minimized.
          </Accordion.Content>

          <Accordion.Title>
            <Icon color="teal" size="big" name="dropdown"/>
            What should I bring to the puzzle hunt?
          </Accordion.Title>
          <Accordion.Content>
            Your creativity and problem solving skills! Along with the following:<br/>
            <List>
              <List.Item description="At least one smart phone.  The more the better! (Think about battery life)."/>
              <List.Item description="A clip board, or a note pad.  Graph paper might come in handy."/>
              <List.Item description="Scissors and tape."/>
              <List.Item description="Writing utensils (pens and pencils)."/>
              <List.Item description="A sturdy single hole punch (capable of punching through 8 layers of paper)."/>
              <List.Item description="Water to drink! You are welcome to bring your own snacks too."/>
            </List>
          </Accordion.Content>

          <Accordion.Title>
            <Icon color="blue" size="big" name="dropdown"/>
            Do I have to be a math/science person?
          </Accordion.Title>
          <Accordion.Content>
            NO! A common misconception is that only mathematically inclined people are good at solving puzzles.
            In this puzzle hunt, it will be to your advantage to have people on your team with
            knowledge of music, art, humanities and social sciences, as well as science and mathematics.
          </Accordion.Content>

          <Accordion.Title>
            <Icon color="violet" size="big" name="dropdown"/>
            How long will this last? (Event Schedule)
          </Accordion.Title>
          <Accordion.Content>
            <List>
              <List.Item description="10:00 AM - Check in at Red Square.  Team's will receive a rules packet and any pre-ordered t-shirts."/>
              <List.Item description="10:45 AM - Announcements."/>
              <List.Item description="11:00 AM - Puzzle Hunt starts!"/>
              <List.Item description="3:00 PM - Finishing Puzzles and Lunch"/>
              <List.Item description="4:00 PM - Prizes awarded!"/>
            </List>
          </Accordion.Content>

          <Accordion.Title>
            <Icon color="purple" size="big" name="dropdown"/>
            What if it rains?
          </Accordion.Title>
          <Accordion.Content>
            Welcome to Washington.  We hunt on!
          </Accordion.Content>

          <Accordion.Title>
            <Icon color="pink" size="big" name="dropdown"/>
            What kind of puzzles will we be solving?
          </Accordion.Title>
          <Accordion.Content>
            Check out the <a href="/puzzles">puzzles from last year</a>!
          </Accordion.Content>

          <Accordion.Title>
            <Icon color="brown" size="big" name="dropdown"/>
            What do the T-Shirts look like?
          </Accordion.Title>
          <Accordion.Content>
            This year we have awesome Next Level Poly/Cotton blend T-Shirts!<br/>
            <List>
              <List.Item>All colors can be viewed at Next Level:<a target="_blank" href="http://www.nextlevelapparel.com/Prod-24-1-29-2/men39s-polycotton-crew.htm">Men's Colors</a> | <a target="_blank" href="http://www.nextlevelapparel.com/Prod-22-1-13-1/next-level-polycotton-tee.htm">Women's Colors</a>.</List.Item>
              <List.Item description="These are the kind of shirts you will want to wear all the time!"/>
              <List.Item description="You can choose a White or Navy logo for any shirt color."/>
              <List.Item description="Early bird price: $10."/>
              <List.Item description="Regular Price (March 11 - March 23): $13"/>
              <List.Item description="T-Shirt sales end March 23, 2017 at midnight."/>
            </List>
            <Image.Group>
              <Image src="/img/2017/t-shirts/mens.jpg"/>
              <Image src="/img/2017/t-shirts/womens.jpg"/>
            </Image.Group>
          </Accordion.Content>

        </Accordion>

      </div>
    );
  }
}
