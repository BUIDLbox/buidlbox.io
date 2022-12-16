import { CSSTransition } from 'react-transition-group';
import './Modal.css';

function Modal({show, setShow}) {
  return (
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300}}
    >
      <div className="modal" onClick={() => setShow(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <div id="mc_embed_signup">
            <form action="https://buidlbox.us18.list-manage.com/subscribe/post?u=440d93cdf1197d43be6f8a47d&amp;id=cf30f16609&amp;f_id=008323e7f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
                <h2>Subscribe to our newsletter!</h2>
                <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                <div class="mc-field-group">
                  <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
                  </label>
                  <input type="email"  name="EMAIL" class="required email" id="mce-EMAIL" required />
                  <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
                </div>
                <div class="mc-field-group input-group">
                  <strong>Who are you? </strong>
                  <ul>
                    <li>
                      <input type="radio" value="1" name="group[214868]" id="mce-group[214868]-214868-0" checked />
                      <label for="mce-group[214868]-214868-0">Buidler</label>
                    </li>
                    <li>
                      <input type="radio" value="2" name="group[214868]" id="mce-group[214868]-214868-1" />
                      <label for="mce-group[214868]-214868-1">Organization</label>
                    </li>
                  </ul>
                  <span id="mce-group[214868]-HELPERTEXT" class="helper_text"></span>
                </div>
                <div hidden="true"><input type="hidden" name="tags" value="2201828" /></div>
                <div id="mce-responses" class="clear">
                  <div class="response" id="mce-error-response" style={{display: 'none'}}></div>
                  <div class="response" id="mce-success-response" style={{display: 'none'}}></div>
                </div>
                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_440d93cdf1197d43be6f8a47d_cf30f16609" tabindex="-1" value="" /></div>
                <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" /></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Modal;