package statistic;

import io.jsondb.annotation.Document;
import io.jsondb.annotation.Id;

@Document(collection = "teamStats", schemaVersion = "1.0")
public class Score {


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

	public int getlSeasonmWin() {
		return lSeasonmWin;
	}

	public void setlSeasonmWin(int lSeasonmWin) {
		this.lSeasonmWin = lSeasonmWin;
	}

	public int getlSeasonMWinAsMaster() {
		return lSeasonMWinAsMaster;
	}

	public void setlSeasonMWinAsMaster(int lSeasonMWinAsMaster) {
		this.lSeasonMWinAsMaster = lSeasonMWinAsMaster;
	}

	public int getlSeasonMWinAsGuest() {
		return lSeasonMWinAsGuest;
	}

	public void setlSeasonMWinAsGuest(int lSeasonMWinAsGuest) {
		this.lSeasonMWinAsGuest = lSeasonMWinAsGuest;
	}

	public int getlSeasonMDrawAsMaster() {
		return lSeasonMDrawAsMaster;
	}

	public void setlSeasonMDrawAsMaster(int lSeasonMDrawAsMaster) {
		this.lSeasonMDrawAsMaster = lSeasonMDrawAsMaster;
	}

	public int getlSeasonMDrawAsGuest() {
		return lSeasonMDrawAsGuest;
	}

	public void setlSeasonMDrawAsGuest(int lSeasonMDrawAsGuest) {
		this.lSeasonMDrawAsGuest = lSeasonMDrawAsGuest;
	}

	public int getlSeasonMLoseAsMaster() {
		return lSeasonMLoseAsMaster;
	}

	public void setlSeasonMLoseAsMaster(int lSeasonMLoseAsMaster) {
		this.lSeasonMLoseAsMaster = lSeasonMLoseAsMaster;
	}

	public int getlSeasonMLoseAsGuest() {
		return lSeasonMLoseAsGuest;
	}

	public void setlSeasonMLoseAsGuest(int lSeasonMLoseAsGuest) {
		this.lSeasonMLoseAsGuest = lSeasonMLoseAsGuest;
	}

	public int getlSeasonmLose() {
		return lSeasonmLose;
	}

	public void setlSeasonmLose(int lSeasonmLose) {
		this.lSeasonmLose = lSeasonmLose;
	}

	public int getlSeasonmDraw() {
		return lSeasonmDraw;
	}

	public void setlSeasonmDraw(int lSeasonmDraw) {
		this.lSeasonmDraw = lSeasonmDraw;
	}

	public int getlSeasonmGoalsShot() {
		return lSeasonmGoalsShot;
	}

	public void setlSeasonmGoalsShot(int lSeasonmGoalsShot) {
		this.lSeasonmGoalsShot = lSeasonmGoalsShot;
	}

	public int getlSeasonmGoalsLost() {
		return lSeasonmGoalsLost;
	}

	public void setlSeasonmGoalsLost(int lSeasonmGoalsLost) {
		this.lSeasonmGoalsLost = lSeasonmGoalsLost;
	}

	public int getWinAsMaster() {
		return winAsMaster;
	}

	public void setWinAsMaster(int winAsMaster) {
		this.winAsMaster = winAsMaster;
	}

	public int getWinAsGuest() {
		return winAsGuest;
	}

	public void setWinAsGuest(int winAsGuest) {
		this.winAsGuest = winAsGuest;
	}

	public int getLoseAsMaster() {
		return loseAsMaster;
	}

	public void setLoseAsMaster(int loseAsMaster) {
		this.loseAsMaster = loseAsMaster;
	}

	public int getLoseAsGuest() {
		return loseAsGuest;
	}

	public void setLoseAsGuest(int loseAsGuest) {
		this.loseAsGuest = loseAsGuest;
	}

	public int getDrawAsMaster() {
		return drawAsMaster;
	}

	public void setDrawAsMaster(int drawAsMaster) {
		this.drawAsMaster = drawAsMaster;
	}

	public int getDrawAsGuest() {
		return drawAsGuest;
	}

	public void setDrawAsGuest(int drawAsGuest) {
		this.drawAsGuest = drawAsGuest;
	}

	@Id
	private String team;
///////////////////////////
	private int matchNumber = 0;

	private int win = 0;

	private int draw = 0;

	private int lose = 0;

	private int goalsLose = 0;

	private int goalsShot = 0;
	/////////////////////////////

	private int l5mWin = 0;

	private int l5mLose = 0;

	private int l5mDraw = 0;
	

	private int l5mGoalsShot = 0;

	private int l5mGoalsLost = 0;
	
	///////////////////////////////////////
	private int lSeasonmWin = 0;
	
	private int lSeasonMWinAsMaster = 0;
	
	private int lSeasonMWinAsGuest = 0;
	
	private int lSeasonMDrawAsMaster = 0;
	
	private int lSeasonMDrawAsGuest = 0;
	
	private int lSeasonMLoseAsMaster = 0;
	
	private int lSeasonMLoseAsGuest = 0;

	private int lSeasonmLose = 0;

	private int lSeasonmDraw = 0;
	

	private int lSeasonmGoalsShot = 0;

	private int lSeasonmGoalsLost = 0;
	
	private int winAsMaster = 0;
	
	private int winAsGuest = 0;
	
	private int loseAsMaster = 0;
	
	private int loseAsGuest = 0;
	
	private int drawAsMaster = 0;
	
	private int drawAsGuest = 0;
	////////////////////////////////////
	


	
}
