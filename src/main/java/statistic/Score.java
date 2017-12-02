package statistic;

import io.jsondb.annotation.Document;
import io.jsondb.annotation.Id;

@Document(collection = "teamStats", schemaVersion = "1.0")
public class Score {

	@Id
	private String team;

	private int matchNumber;

	private int win;

	private int draw;

	private int lose;

	private int goalsLose;

	private int goalsShot;

	private int l5mWin;

	private int l5mLose;

	private int l5mDraw;

	private int l5mGoalsShot;

	private int l5mGoalsLost;

	private int mmatchNumber;

	private int mwin;

	private int mdraw;

	private int mlose;

	private int mgoalsLose;

	private int mgoalsShot;

	private int ml5mWin;

	private int ml5mLose;

	private int ml5mDraw;

	private int ml5mGoalsShot;

	private int ml5mGoalsLost;

	private int gmatchNumber;

	private int gwin;

	private int gdraw;

	private int glose;

	private int ggoalsLose;

	private int ggoalsShot;

	private int gl5mWin;

	private int gl5mLose;

	private int gl5mDraw;

	private int gl5mGoalsShot;

	private int gl5mGoalsLost;

	public String getTeam() {
		return team;
	}

	public void setTeam(String team) {
		this.team = team;
	}

	public int getMatchNumber() {
		return matchNumber;
	}

	public void setMatchNumber(int matchNumber) {
		this.matchNumber = matchNumber;
	}

	public int getWin() {
		return win;
	}

	public void setWin(int win) {
		this.win = win;
	}

	public int getDraw() {
		return draw;
	}

	public void setDraw(int draw) {
		this.draw = draw;
	}

	public int getLose() {
		return lose;
	}

	public void setLose(int lose) {
		this.lose = lose;
	}

	public int getGoalsLose() {
		return goalsLose;
	}

	public void setGoalsLose(int goalsLose) {
		this.goalsLose = goalsLose;
	}

	public int getGoalsShot() {
		return goalsShot;
	}

	public void setGoalsShot(int goalsShot) {
		this.goalsShot = goalsShot;
	}

	public int getL5mWin() {
		return l5mWin;
	}

	public void setL5mWin(int l5mWin) {
		this.l5mWin = l5mWin;
	}

	public int getL5mLose() {
		return l5mLose;
	}

	public void setL5mLose(int l5mLose) {
		this.l5mLose = l5mLose;
	}

	public int getL5mDraw() {
		return l5mDraw;
	}

	public void setL5mDraw(int l5mDraw) {
		this.l5mDraw = l5mDraw;
	}

	public int getL5mGoalsShot() {
		return l5mGoalsShot;
	}

	public void setL5mGoalsShot(int l5mGoalsShot) {
		this.l5mGoalsShot = l5mGoalsShot;
	}

	public int getL5mGoalsLost() {
		return l5mGoalsLost;
	}

	public void setL5mGoalsLost(int l5mGoalsLost) {
		this.l5mGoalsLost = l5mGoalsLost;
	}

	public int getMmatchNumber() {
		return mmatchNumber;
	}

	public void setMmatchNumber(int mmatchNumber) {
		this.mmatchNumber = mmatchNumber;
	}

	public int getMwin() {
		return mwin;
	}

	public void setMwin(int mwin) {
		this.mwin = mwin;
	}

	public int getMdraw() {
		return mdraw;
	}

	public void setMdraw(int mdraw) {
		this.mdraw = mdraw;
	}

	public int getMlose() {
		return mlose;
	}

	public void setMlose(int mlose) {
		this.mlose = mlose;
	}

	public int getMgoalsLose() {
		return mgoalsLose;
	}

	public void setMgoalsLose(int mgoalsLose) {
		this.mgoalsLose = mgoalsLose;
	}

	public int getMgoalsShot() {
		return mgoalsShot;
	}

	public void setMgoalsShot(int mgoalsShot) {
		this.mgoalsShot = mgoalsShot;
	}

	public int getMl5mWin() {
		return ml5mWin;
	}

	public void setMl5mWin(int ml5mWin) {
		this.ml5mWin = ml5mWin;
	}

	public int getMl5mLose() {
		return ml5mLose;
	}

	public void setMl5mLose(int ml5mLose) {
		this.ml5mLose = ml5mLose;
	}

	public int getMl5mDraw() {
		return ml5mDraw;
	}

	public void setMl5mDraw(int ml5mDraw) {
		this.ml5mDraw = ml5mDraw;
	}

	public int getMl5mGoalsShot() {
		return ml5mGoalsShot;
	}

	public void setMl5mGoalsShot(int ml5mGoalsShot) {
		this.ml5mGoalsShot = ml5mGoalsShot;
	}

	public int getMl5mGoalsLost() {
		return ml5mGoalsLost;
	}

	public void setMl5mGoalsLost(int ml5mGoalsLost) {
		this.ml5mGoalsLost = ml5mGoalsLost;
	}

	public int getGmatchNumber() {
		return gmatchNumber;
	}

	public void setGmatchNumber(int gmatchNumber) {
		this.gmatchNumber = gmatchNumber;
	}

	public int getGwin() {
		return gwin;
	}

	public void setGwin(int gwin) {
		this.gwin = gwin;
	}

	public int getGdraw() {
		return gdraw;
	}

	public void setGdraw(int gdraw) {
		this.gdraw = gdraw;
	}

	public int getGlose() {
		return glose;
	}

	public void setGlose(int glose) {
		this.glose = glose;
	}

	public int getGgoalsLose() {
		return ggoalsLose;
	}

	public void setGgoalsLose(int ggoalsLose) {
		this.ggoalsLose = ggoalsLose;
	}

	public int getGgoalsShot() {
		return ggoalsShot;
	}

	public void setGgoalsShot(int ggoalsShot) {
		this.ggoalsShot = ggoalsShot;
	}

	public int getGl5mWin() {
		return gl5mWin;
	}

	public void setGl5mWin(int gl5mWin) {
		this.gl5mWin = gl5mWin;
	}

	public int getGl5mLose() {
		return gl5mLose;
	}

	public void setGl5mLose(int gl5mLose) {
		this.gl5mLose = gl5mLose;
	}

	public int getGl5mDraw() {
		return gl5mDraw;
	}

	public void setGl5mDraw(int gl5mDraw) {
		this.gl5mDraw = gl5mDraw;
	}

	public int getGl5mGoalsShot() {
		return gl5mGoalsShot;
	}

	public void setGl5mGoalsShot(int gl5mGoalsShot) {
		this.gl5mGoalsShot = gl5mGoalsShot;
	}

	public int getGl5mGoalsLost() {
		return gl5mGoalsLost;
	}

	public void setGl5mGoalsLost(int gl5mGoalsLost) {
		this.gl5mGoalsLost = gl5mGoalsLost;
	}

}
